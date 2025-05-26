from rest_framework.routers import SimpleRouter

from .views import ProjectApiViewset

router = SimpleRouter()

router.register("projects", ProjectApiViewset)

urlpatterns = [] + router.urls