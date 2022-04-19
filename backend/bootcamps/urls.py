from django.urls import path
from bootcamps.views import ListAllBootcamp, ListUpcomingBootcamp

urlpatterns = [
    path('all/', ListAllBootcamp.as_view()),
    path('upcoming/<int:num>', ListUpcomingBootcamp.as_view()),

]
