from rest_framework.viewsets import GenericViewSet

class APIViewset(GenericViewSet):

    def get_user(self, request):

        return request.user
    
    def get_authenticated_user(self, request):

        user = self.get_user(request)
        return user if user.is_authenticated else None