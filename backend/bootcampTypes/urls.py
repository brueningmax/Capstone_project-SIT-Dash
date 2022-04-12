from django.urls import path
from bootcampTypes.views import ListAllBootcampType

urlpatterns = [
    path('all/', ListAllBootcampType.as_view()),
]
