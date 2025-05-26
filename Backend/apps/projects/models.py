from django.db import models

from .config import media_storage_path, ProjectStatus
from apps.access.models import User
from apps.access.config import COMMAN_NULL_DEFAULT_CONFIG

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class Project(BaseModel):

    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, **COMMAN_NULL_DEFAULT_CONFIG)
    title = models.CharField(max_length=100)
    description = models.TextField()
    tech_stack = models.JSONField()
    demo_link = models.URLField()
    github_link = models.URLField()
    image = models.ImageField(upload_to=media_storage_path, blank=True, null=True)
    status = models.CharField(max_length=20, choices=ProjectStatus.choices, default=ProjectStatus.IN_PROGRESS)
    order = models.PositiveIntegerField(default=0)

    class Meta(BaseModel.Meta):
        default_related_name = "related_projects"
    