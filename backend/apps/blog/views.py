from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models.query_utils import Q

from apps.blog.pagination import LargeSetPagination, SmallSetPagination
from apps.blog.serializer import PostListSerializer, PostSerializer
from apps.category.models import Category

from .models import Post, ViewCount


class BlogList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        posts = Post.post_objects.all()

        paginator = SmallSetPagination()
        small_paginator_results = paginator.paginate_queryset(posts, request)

        if posts.exists():
            serializerPosts = PostListSerializer(
                small_paginator_results,
                many=True,
                context={'request': request}
            )

            return paginator.get_paginated_response({'posts': serializerPosts.data})

        if not posts.exists():
            return Response(
                {'error_message': 'Internal_Server_Error  -  Sorry, The website is unresponsive'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class ListPostsByCategoryView(APIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):

        if Post.post_objects.all().exists():

            slug = request.query_params.get('slug')

            posts = Post.post_objects.order_by('-published').all()
            category = Category.objects.get(slug=slug)

            # Si la categoría tiene un padre, filtrar sólo por esta categoría y no por el padre también
            # if category.parent:
            #     posts = posts.filter(category=category)

            # Si la categoría no tiene una categoría padre, significa que ella misma es una categoría padre
            # else:

            # Filtrar categoria sola
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            # Si esta categoría padre tiene hijos, filtrar por la categoría padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]

                for cat in sub_categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)

                posts = posts.filter(category__in=filtered_categories)

            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(
                result, many=True, context={'request': request})

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response(
                {'error_message': 'Internal_Server_Error  -  Sorry, The website is unresponsive'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):

        if Post.post_objects.filter(slug=slug).exists():

            post = Post.post_objects.get(slug=slug)
            serializer = PostSerializer(post, context={'request': request})
            # extraemos la ip del usuario
            address = request.META.get('HTTP_X_FORWARDED_FOR')

            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1
                post.save()

            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Post doesnt exist'}, status=status.HTTP_404_NOT_FOUND)


class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        # Q() nos permite filtrar por varios campos
        search_term = request.query_params.get('s')

        matches = Post.post_objects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(content__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )
        # __ es similar a .

        paginator = LargeSetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = PostListSerializer(
            results, many=True, context={'request': request})
        return paginator.get_paginated_response({'post_filtered': serializer.data})
