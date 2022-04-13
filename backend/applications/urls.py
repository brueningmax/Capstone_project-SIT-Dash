from django.urls import path

from applications.views import ListAllApplications, ListLatestApplications

urlpatterns = [
    path('all/', ListAllApplications.as_view()),
    path('latest/', ListLatestApplications.as_view()),
]