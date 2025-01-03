# from dataclasses import field
from rest_framework import serializers
from apps.blog.models import Post
from apps.category.serializers import CategorySerializer


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'category',
            'content',
            'description',
            'published',
            'views',
            'time_stamp',
        ]

    def to_representation(self, instance):
        #
        representation = super().to_representation(instance)

        if instance.thumbnail:
            request = self.context.get('request')
            if request:

                full_thumbnail_url = request.build_absolute_uri(
                    instance.thumbnail.url)
                representation['thumbnail'] = full_thumbnail_url

        return representation


class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'category',
            'description',
            'published',
            'views',
            'time_stamp',
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if instance.thumbnail:
            request = self.context.get('request')
            if request:

                full_thumbnail_url = request.build_absolute_uri(
                    instance.thumbnail.url)
                representation['thumbnail'] = full_thumbnail_url

        return representation
