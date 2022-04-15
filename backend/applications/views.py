from django.shortcuts import render

from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response

from applications.models import Application
from applications.serializers import ApplicationSerializer, ApplicationAllSerializer
from applications.serializers import LatestApplicationSerializer


class ListAllApplications(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Application.objects.all()
    permission_classes = []
    serializer_class = ApplicationAllSerializer


class ListLatestApplications(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Application.objects.all().order_by('-applied')
    permission_classes = []
    serializer_class = LatestApplicationSerializer


# class FilteringApplicationView(GenericAPIView):
#     queryset = Application.objects.all()
#     permission_classes = []
#     serializer_class = ApplicationSerializer
#
#     def get(self, request, *args, **kwargs):
#         queryset = self.get_queryset()
#         if request.data['status'] != False:
#             queryset = queryset.filter(status=request.data['status'])
#         if request.data['start_date'] != False:
#             queryset = queryset.filter(start_date=request.data['start_date'])
#         if request.data['bootcamp_location'] != False:
#             queryset = queryset.filter(bootcamp_location=request.data['bootcamp_location'])
#         serializer = self.get_serializer(queryset)
#         return Response(serializer.data)

#
# class FilteringApplicationView(ListAPIView):
#     queryset = Application.objects.all()
#     permission_classes = []
#     serializer_class = ApplicationSerializer
#
#     def get_queryset(self):
#         queryset = self.get_queryset()
#         return queryset.filter(status=self.kwargs['status'])


class FilteringApplicationView(ListAPIView):
    queryset = Application.objects.all()
    permission_classes = []
    serializer_class = ApplicationSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if request.data['status'] is not None:
            queryset = queryset.filter(status=request.data['status'])
        if request.data['start_date'] is not None:
            queryset = queryset.filter(bootcamp__start_date=request.data['start_date'])
        if request.data['bootcamp_location'] is not None:
            queryset = queryset.filter(bootcamp__bootcamp_location__location=request.data['bootcamp_location'])
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)






