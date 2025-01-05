from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# AbstractBaseUser is a models already created by django with his user, password included


class UserAccountManager(BaseUserManager):
    def create_user(self, email: str, password: str | None = None, **extra_fields):
        if not email:
            raise ValueError('User must have an email address')

        email = self.normalize_email(email=email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email: str, password: str | None = None, **extra_fields):
        user = self.create_user(email=email, password=password, **extra_fields)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_editor = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    # indicate that field are necessary for authenticate
    REQUIRED_FIELDS = ['first_name', 'last_name']
