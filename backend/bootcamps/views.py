from rest_framework.generics import ListAPIView
from bootcamps.models import Bootcamp
from bootcamps.serializers import BootcampSerializer


class ListAllBootcamp(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = Bootcamp.objects.all()
    permission_classes = []
    serializer_class = BootcampSerializer
