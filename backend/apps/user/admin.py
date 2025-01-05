from django.contrib import admin
from .models import UserAccount


@admin.register(UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'last_name',
        'email',
        'is_editor',
        'is_staff'
    )

    search_fields = (
        'first_name',
        'last_name',
        'email',
        'is_editor',
        'is_staff',
    )
