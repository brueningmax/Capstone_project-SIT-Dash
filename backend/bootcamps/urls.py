from django.urls import path
from bootcamps.views import ListAllBootcamp, ListUpcomingBootcamp

urlpatterns = [
    path('all/', ListAllBootcamp.as_view()),
    path('upcoming/', ListUpcomingBootcamp.as_view()),

]
