from rest_framework.generics import ListAPIView
from bootcampStudentRelations.models import BootcampStudentRelation
from bootcampStudentRelations.serializers import BootcampStudentRelationSerializer


class ListAllBootcampStudentRelations(ListAPIView):
    """
    get:
    Returns all the restaurants
    """
    queryset = BootcampStudentRelation.objects.all()
    permission_classes = []
    serializer_class = BootcampStudentRelationSerializer
