from django.urls import path

from applications.views import ListAllApplications, ListLatestApplications, FilteringApplicationView

urlpatterns = [
    path('all/', ListAllApplications.as_view()),
    path('latest/', ListLatestApplications.as_view()),
    path('filter/', FilteringApplicationView.as_view()),
]