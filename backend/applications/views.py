from django.shortcuts import render
from rest_framework.generics import ListAPIView
from applications.models import Application
from applications.serializers import ApplicationSerializer

from applications.serializers import LatestApplicationSerializer


class ListAllApplications(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Application.objects.all()
    permission_classes = []
    serializer_class = ApplicationSerializer


class ListLatestApplications(ListAPIView):
        """
        get:
        Returns all the restaurants
        """
        queryset = Application.objects.all()
        permission_classes = []
        serializer_class = LatestApplicationSerializer


