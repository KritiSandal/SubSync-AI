from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated

from django_filters.rest_framework import DjangoFilterBackend

from .models import Project
from .serializers import ProjectSerializer
from .services import check_project_limit
from rest_framework.views import APIView
from rest_framework.response import Response

from subscriptions.models import Subscription

class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]

    filterset_fields = [
        "status",
    ]

    search_fields = [
        "title",
        "description",
    ]

    ordering_fields = [
        "created_at",
        "updated_at",
        "title",
    ]

    def get_queryset(self):
        return Project.objects.filter(
            owner=self.request.user
        )

    def perform_create(self, serializer):
        check_project_limit(self.request.user)

        serializer.save(
            owner=self.request.user
        )


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(
            owner=self.request.user
        )
class ProjectDashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        projects = Project.objects.filter(owner=request.user)

        subscription = Subscription.objects.get(
            user=request.user
        )

        data = {
            "total_projects": projects.count(),

            "active_projects": projects.filter(
                status="active"
            ).count(),

            "draft_projects": projects.filter(
                status="draft"
            ).count(),

            "archived_projects": projects.filter(
                status="archived"
            ).count(),

            "plan_name": subscription.plan.name,

            "ai_credits": subscription.plan.ai_credits,

            "recent_projects": ProjectSerializer(
                projects[:5],
                many=True,
            ).data,
        }

        return Response(data)
    
class ProjectAnalyticsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        projects = Project.objects.filter(owner=request.user)

        total = projects.count()
        active = projects.filter(status="active").count()
        draft = projects.filter(status="draft").count()
        archived = projects.filter(status="archived").count()

        return Response({
            "total_projects": total,
            "active_projects": active,
            "draft_projects": draft,
            "archived_projects": archived,
        })