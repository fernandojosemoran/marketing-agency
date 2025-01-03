from django.db import models
from apps.category.models import Category
from django.utils import timezone
from ckeditor.fields import RichTextField

from urllib.parse import urljoin
from django.conf import settings
# from ckeditor_uploader.fields import RichTextUploadingField ---> search


# Create your models here.


def blog_thumbnail_directory(intance, file_name):
    return f'upload/blog/{intance.title}/{file_name}'


class Post(models.Model):
    # De esta forma creamos nuestros propios manejadores o administradores de estado
    class ObjectPost(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    post_options = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    thumbnail = models.ImageField(
        upload_to=blog_thumbnail_directory,
        max_length=500
    )

    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    objects = models.Manager()  # by default
    post_objects = ObjectPost()  # we created this method

    content = RichTextField()

    description = models.TextField(max_length=255)

    published = models.DateTimeField(default=timezone.now)
    views = models.IntegerField(default=0)

    status = models.CharField(
        max_length=10, choices=post_options, default='draft'
    )

    time_stamp = models.IntegerField()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title


class ViewCount (models.Model):
    post = models.ForeignKey(
        Post,
        related_name='blogpost_view_count',
        on_delete=models.CASCADE
    )

    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views
