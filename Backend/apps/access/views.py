from django.contrib.auth import authenticate

from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
# from rest_framework.mixins import CreateModelMixin, ListModelMixin

class APIViewset(ModelViewSet):

    def get_user(self, request):

        return request.user
    
    def get_authenticated_user(self, request):

        user = self.get_user(request)
        return user if user.is_authenticated else None
    
class LoginView(APIView):
    
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(request=request, username=email, password=password)

        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "email": email,
                "token" : token.key
            })
        
        return Response({
            "error": "Invalid Credentials"
        },status=status.HTTP_401_UNAUTHORIZED)