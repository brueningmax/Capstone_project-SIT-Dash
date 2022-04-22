from django.urls import path

from applications.views import ListAllApplications, ListLatestApplications, GetDashboardGraphData, FilteringApplicationView, RetrieveApplication, UpdateApplication

urlpatterns = [
    # /backend/api/applications/

    path('<int:pk>', RetrieveApplication.as_view()),
    path('update/<int:pk>', UpdateApplication.as_view()),
    path('all/', ListAllApplications.as_view()),
    path('latest/<int:num>', ListLatestApplications.as_view()),
    path('filter/', FilteringApplicationView.as_view()),
    path('graph_data/dashboard/', GetDashboardGraphData.as_view()),
]