from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

from apps.access.config import COMMAN_BLANK_NULL_DEFAULT_CONFIG, COMMON_CHAR_FIELD_MAX_LENGTH, COMMAN_NULL_DEFAULT_CONFIG

class CustomUserManager(BaseUserManager):
    
    def _create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("Email should be must")
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_user(self, email, password=None, **kwargs):
        kwargs.setdefault("is_staff", False)
        kwargs.setdefault("is_superuser", False)
        return self._create_user(email, password, **kwargs)
    
    def create_superuser(self, email, password=None, **kwargs):
        kwargs.setdefault("is_staff", True)
        kwargs.setdefault("is_superuser", True)

        if kwargs.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if kwargs.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        
        return self._create_user(email, password, **kwargs)
    
class User(AbstractUser):

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    username = None
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=COMMON_CHAR_FIELD_MAX_LENGTH)
    phone_number = models.CharField(max_length=COMMON_CHAR_FIELD_MAX_LENGTH, **COMMAN_BLANK_NULL_DEFAULT_CONFIG)
    first_name = models.CharField(**COMMAN_BLANK_NULL_DEFAULT_CONFIG)
    last_name = models.CharField(**COMMAN_BLANK_NULL_DEFAULT_CONFIG)

    class Meta:
        default_related_name = "related_users"