from datetime import timedelta

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from .models import Plan, Subscription


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_default_subscription(sender, instance, created, **kwargs):
    if not created:
        return

    free_plan = Plan.objects.filter(
        name__iexact="Free",
        is_active=True,
    ).first()

    if free_plan:
        Subscription.objects.create(
            user=instance,
            plan=free_plan,
            expires_at=timezone.now() + timedelta(days=365),
        )