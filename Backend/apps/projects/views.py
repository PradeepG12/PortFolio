from apps.access.views import APIViewset
from .models import Project
from .serializers import ProjectSerializer

class ProjectApiViewset(APIViewset):

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self, request):

        user = self.get_authenticated_user(self, request)
        if not user:
            raise ValueError("Only Admins can create")
        return super().get_queryset()