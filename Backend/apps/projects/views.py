from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import PermissionDenied

from apps.access.views import APIViewset
from .models import Project
from .serializers import ProjectSerializer

class ProjectApiViewset(APIViewset):

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def create(self, request, *args, **kwargs):

        user = self.get_authenticated_user(self.request)
        if not user:
            raise PermissionDenied("Only Admins can create")
        return super().create(request, *args, **kwargs)

@api_view(["GET"])
def get_server_status(request):
    return Response({"message": "Server is up"}, status=200)