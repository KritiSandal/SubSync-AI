from django.contrib import admin

from .models import Plan, Subscription


@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "price",
        "billing_cycle",
        "is_active",
    )

    list_filter = (
        "billing_cycle",
        "is_active",
    )

    search_fields = (
        "name",
    )


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "plan",
        "status",
        "expires_at",
    )

    list_filter = (
        "status",
    )

    search_fields = (
        "user__email",
    )