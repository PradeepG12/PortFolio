from rest_framework.routers import SimpleRouter
from django.urls import path

from .views import ProjectApiViewset, get_server_status

router = SimpleRouter()

router.register("projects", ProjectApiViewset)

urlpatterns = [
    path("server/", get_server_status)
] + router.urls