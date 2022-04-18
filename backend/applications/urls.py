from django.urls import path

from applications.views import ListAllApplications, ListLatestApplications, GetDashboardGraphData

urlpatterns = [
    # /backend/api/applications/
    path('all/', ListAllApplications.as_view()),
    path('latest/', ListLatestApplications.as_view()),
    path('graph_data/dashboard/', GetDashboardGraphData.as_view()),
]