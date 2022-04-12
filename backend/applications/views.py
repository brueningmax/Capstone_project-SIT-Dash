from django.shortcuts import render
from rest_framework.generics import ListAPIView
from applications.models import Application
from applications.serializers import ApplicationSerializer


class ListAllApplications(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Application.objects.all()
    permission_classes = []
    serializer_class = ApplicationSerializer

