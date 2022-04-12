from django.urls import path
from bootcamps.views import ListAllBootcamp

urlpatterns = [
    path('all/', ListAllBootcamp.as_view()),
]