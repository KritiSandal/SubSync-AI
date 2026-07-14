from django.urls import path

from .views import (
    ProjectListCreateView,
    ProjectDetailView,
    ProjectDashboardView,
    ProjectAnalyticsView,
)

urlpatterns = [
    path(
        "projects/",
        ProjectListCreateView.as_view(),
        name="project-list",
    ),
    path(
    "projects/analytics/",
    ProjectAnalyticsView.as_view(),
    name="project-analytics",
),
    path(
        "projects/<int:pk>/",
        ProjectDetailView.as_view(),
        name="project-detail",
    ),

    path(
    "projects/dashboard/",
    ProjectDashboardView.as_view(),
    name="project-dashboard",
    ),

   
]