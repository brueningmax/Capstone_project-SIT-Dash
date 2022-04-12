from rest_framework.generics import ListAPIView
from bootcampTypes.models import BootcampType
from bootcampTypes.serializers import BootcampTypeSerializer


class ListAllBootcampType(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = BootcampType.objects.all()
    permission_classes = []
    serializer_class = BootcampTypeSerializer
