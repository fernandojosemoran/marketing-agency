from django.contrib import admin
from .models import Category, ViewsCount

# Register your models here.


class CategoryAdmin(admin.ModelAdmin):
    list_display_links = ('id', 'admin')
    list_display_links = ('name')
    list_per_page = 25


admin.site.register(Category)
admin.site.register(ViewsCount)
