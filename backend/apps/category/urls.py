from django.urls import path

from .views import ListCategoriesViews

urlpatterns = [
    path('view_categories', ListCategoriesViews.as_view(), name='list_category')
]
