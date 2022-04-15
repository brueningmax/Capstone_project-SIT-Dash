from rest_framework.generics import ListAPIView, GenericAPIView
from datetime import datetime
from rest_framework.response import Response

from applications.models import Application
from bootcamps.models import Bootcamp
from bootcamps.serializers import BootcampSerializer, BootcampUpComingSerializer
from rest_framework.views import APIView


class ListAllBootcamp(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Bootcamp.objects.all()
    permission_classes = []
    serializer_class = BootcampSerializer


# class ListUpcomingBootcamp(GenericAPIView):
#     #
#     queryset = Bootcamp.objects.all().order_by('start_date')
#     permission_classes = []
#     serializer_class = BootcampUpComingSerializer
#     #
#     def get(self, request, *args, **kwargs):
#         today = datetime.now().date()
#         Bootcamp.objects.filter(start_date__gt=today)
#         queryset = self.get_queryset().filter(start_date__gt=today)[:3]
#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)

class ListUpcomingBootcamp(APIView):
    def get(self, request, *args, **kwargs):
        today = datetime.now().date()
        queryset = Bootcamp.objects.filter(start_date__gt=today).order_by('start_date')[:3]
        response = {}

        #preparing the bootcamp-objects in response
        for entry in range(len(queryset)):
            response[entry] = {
                'id': queryset[entry].pk,
                'name': queryset[entry].name,
                'start_date': queryset[entry].start_date,
                'applications': {
                    'serious': 0,
                    'not_serious': 0,
                    'accepted': 0,
                    'enrolled': 0,
                    'to_review': 0,
                    'dropped_out': 0,
                    'else': 0,
                    'total': 0,
                }
            }

            # filtering applications for bootcamps and iterating through them, checking and summing up statuses
            applications = Application.objects.filter(bootcamp=queryset[entry].pk)
            num_applications = len(applications)
            response[entry]['applications']['total'] = num_applications

            #summing up
            for application_entry in range(num_applications):
                match applications[application_entry].status:
                    case 'serious':
                        response[entry]['applications']['serious'] += 1
                    case 'not_serious':
                        response[entry]['applications']['not_serious'] += 1
                    case 'accepted':
                        response[entry]['applications']['accepted'] += 1
                    case 'enrolled':
                        response[entry]['applications']['enrolled'] += 1
                    case 'to_review':
                        response[entry]['applications']['to_review'] += 1
                    case 'dropped_out':
                        response[entry]['applications']['dropped_out'] += 1
                    case _:
                        response[entry]['applications']['else'] += 1

        return Response(response)





