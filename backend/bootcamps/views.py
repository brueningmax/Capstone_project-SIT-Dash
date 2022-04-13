from rest_framework.generics import ListAPIView, GenericAPIView
from datetime import datetime

from rest_framework.response import Response

from applications.models import Application
from bootcamps.models import Bootcamp
from bootcamps.serializers import BootcampSerializer, BootcampUpComingSerializer
from django.db.models import Count

class ListAllBootcamp(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Bootcamp.objects.all()
    permission_classes = []
    serializer_class = BootcampSerializer


class ListUpcomingBootcamp(GenericAPIView):

    queryset = Bootcamp.objects.all().order_by('-start_date')
    permission_classes = []
    serializer_class = BootcampUpComingSerializer

    def get(self, request, *args, **kwargs):
        #today = datetime.now().date()
        # Bootcamp.objects.filter(start_date__gt=today)
        #queryset = self.get_queryset().filter(start_date__gt=today)
        queryset = self.get_queryset().filter(start_date='2022-09-11')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

        # fieldname = ('status',)
        # Application.objects.values(fieldname).order_by().annotate(the_count=Count(fieldname))






