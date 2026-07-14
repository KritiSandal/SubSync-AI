from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Plan, Subscription
from .serializers import (
    PlanSerializer,
    SubscriptionSerializer,
)


class PlanListView(generics.ListAPIView):
    queryset = Plan.objects.filter(is_active=True)
    serializer_class = PlanSerializer
    permission_classes = [AllowAny]


class SubscriptionView(generics.RetrieveAPIView):
    serializer_class = SubscriptionSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.subscription