from django.shortcuts import render

from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response

from applications.models import Application
from applications.serializers import ApplicationSerializer, ApplicationAllSerializer
from applications.serializers import LatestApplicationSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime
from django.db.models import Q


class ListAllApplications(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Application.objects.all()
    permission_classes = []
    serializer_class = ApplicationAllSerializer


class ListLatestApplications(GenericAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Application.objects.all().order_by('-applied')
    permission_classes = []
    serializer_class = LatestApplicationSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()[:kwargs.get('num')]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=200)

class GetDashboardGraphData(APIView):
    def post(self, request, *args, **kwargs):
        #building date pairs for the last 18 Months
        current_month = datetime.today().month
        current_year = datetime.today().year
        date_pairs = []
        for i in range(18):
            date_pairs.append([current_month, current_year])
            current_month -= 1
            if current_month <= 0:
                current_year -= 1
                current_month = 12
        date_pairs.reverse()
        month_names = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']

        # building the response
        response = {}
        for pair in date_pairs:
            current_package = date_pairs.index(pair) + 1
            response[current_package] = {
                'month': month_names[pair[0]],
                'year': pair[1],
                'short_courses': 0,
                'immersive_bootcamps': 0,
                'part_time_bootcamps': 0,
                'total': 0,
            }
            # get total
            application_set = Application.objects.filter(applied__month=pair[0]).filter(applied__year=pair[1])

            if request.data.get('filtered') == '1':
                application_set = application_set.filter(Q(status='serious') | Q(status='accepted') | Q(status='enrolled'))

            response[current_package]['total'] = len(application_set)

            # get short_courses
            # is in person FALSE
            short_courses = application_set.filter(bootcamp__is_in_person=False)
            # is remote & is part-time TRUE
            short_courses.filter(bootcamp__is_remote=True).filter(bootcamp__is_part_time=True)
            response[current_package]['short_courses'] = len(short_courses)

            # get immersive_bootcamps
            # is_part_time = False
            immersive_bootcamps = application_set.filter(bootcamp__is_part_time=False)
            # is_remote && is_in_person = True
            immersive_bootcamps.filter(bootcamp__is_remote=True).filter(bootcamp__is_in_person=True)
            response[current_package]['immersive_bootcamps'] = len(immersive_bootcamps)

            # get part_time_bootcamps
            # all flags = True
            part_time_bootcamps = application_set.filter(bootcamp__is_in_person=False).filter(bootcamp__is_remote=True).filter(bootcamp__is_part_time=True)
            response[current_package]['part_time_bootcamps'] = len(part_time_bootcamps)


        return Response(response)


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
    serializer_class = LatestApplicationSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if request.data.get('status') is not None:
            queryset = queryset.filter(status=request.data['status'])
        if request.data.get('start_date') is not None:
            queryset = queryset.filter(bootcamp__start_date=request.data['start_date'])
        if request.data.get('bootcamp_location') is not None:
            queryset = queryset.filter(bootcamp__bootcamp_location__location=request.data['bootcamp_location'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)






