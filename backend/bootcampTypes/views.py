from rest_framework.generics import ListAPIView
from backend.bootcampTypes.models import BootcampType
from backend.bootcampTypes.serializers import BootcampTypesSerializer


class ListBootcampType(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = BootcampType.objects.all()
    permission_classes = []
    serializer_class = BootcampTypesSerializer
