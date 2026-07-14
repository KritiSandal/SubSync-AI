from rest_framework import serializers

from .models import Plan, Subscription


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = (
            "id",
            "name",
            "description",
            "price",
            "billing_cycle",
            "max_projects",
            "max_storage_gb",
            "ai_credits",
            "api_requests",
        )
class SubscriptionSerializer(serializers.ModelSerializer):
    plan_name = serializers.CharField(
        source="plan.name",
        read_only=True,
    )

    plan_price = serializers.DecimalField(
        source="plan.price",
        max_digits=8,
        decimal_places=2,
        read_only=True,
    )

    max_projects = serializers.IntegerField(
        source="plan.max_projects",
        read_only=True,
    )

    max_storage_gb = serializers.IntegerField(
        source="plan.max_storage_gb",
        read_only=True,
    )

    ai_credits = serializers.IntegerField(
        source="plan.ai_credits",
        read_only=True,
    )

    class Meta:
        model = Subscription
        fields = (
            "plan_name",
            "plan_price",
            "status",
            "expires_at",
            "max_projects",
            "max_storage_gb",
            "ai_credits",
        )