from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from projects.models import Project
from subscriptions.models import Subscription


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        subscription = Subscription.objects.select_related("plan").get(
            user=request.user
        )

        total_projects = Project.objects.filter(
            owner=request.user
        ).count()

        data = {
            "email": request.user.email,
            "username": request.user.username,

            "plan": subscription.plan.name,
            "status": subscription.status,
            "expires_at": subscription.expires_at,

            "total_projects": total_projects,
            "remaining_projects": (
                subscription.plan.max_projects - total_projects
            ),
        }

        serializer = DashboardSerializer(data)
        return Response(serializer.data)