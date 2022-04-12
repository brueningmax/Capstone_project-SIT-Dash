from rest_framework.generics import ListAPIView
from backend.bootcampStudentRelations.models import BootcampStudentRelation
from backend.bootcampStudentRelations.serializers import BootcampStudentRelationSerializer


class ListBootcampStudentRelations(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = BootcampStudentRelation.objects.all()
    permission_classes = []
    serializer_class = BootcampStudentRelationSerializer
