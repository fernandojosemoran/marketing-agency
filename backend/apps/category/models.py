from django.db import models

# Create your models here.


class Category (models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=255, unique=True, blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    views = models.IntegerField(default=0, blank=True)
    parent = models.ForeignKey(
        'self',
        related_name='children',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name

    def get_views_count(self):
        views = ViewsCount.objects.filter(category=self).count()
        return views


class ViewsCount (models.Model):
    category = models.ForeignKey(
        Category,
        related_name='Category_view_count',
        on_delete=models.CASCADE,
        blank=True
    )

    ip_address = models.CharField(max_length=255, unique=True)

    def __str__(self) -> str:
        return f'self.ip_address'
