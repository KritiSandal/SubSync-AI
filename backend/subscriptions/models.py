from django.db import models


class Plan(models.Model):
    BILLING_CHOICES = (
        ("monthly", "Monthly"),
        ("yearly", "Yearly"),
    )

    name = models.CharField(max_length=50)

    description = models.TextField()

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
    )

    billing_cycle = models.CharField(
        max_length=10,
        choices=BILLING_CHOICES,
    )

    max_projects = models.PositiveIntegerField()

    max_storage_gb = models.PositiveIntegerField()

    ai_credits = models.PositiveIntegerField()

    api_requests = models.PositiveIntegerField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["price"]

    def __str__(self):
        return self.name
    
from django.conf import settings
from django.utils import timezone
from datetime import timedelta


class Subscription(models.Model):
    STATUS_CHOICES = (
        ("active", "Active"),
        ("cancelled", "Cancelled"),
        ("expired", "Expired"),
    )

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="subscription",
    )

    plan = models.ForeignKey(
        Plan,
        on_delete=models.PROTECT,
        related_name="subscriptions",
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="active",
    )

    started_at = models.DateTimeField(
        auto_now_add=True,
    )

    expires_at = models.DateTimeField()

    auto_renew = models.BooleanField(
        default=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return f"{self.user.email} - {self.plan.name}"

    @property
    def is_expired(self):
        return timezone.now() > self.expires_at