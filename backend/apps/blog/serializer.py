from dataclasses import field
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
