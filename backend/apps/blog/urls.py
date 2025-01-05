from django.urls import path

from .views import BlogList, ListPostsByCategoryView, PostDetailView, SearchBlogView

urlpatterns = [
    path('blog_list', BlogList.as_view(), name='blog_list'),
    path('by_categories', ListPostsByCategoryView.as_view(), name='by_category'),
    path('detail/<slug>', PostDetailView.as_view(), name='post-detail-view'),
    path('search', SearchBlogView.as_view(), name='search-blog-view')
]
