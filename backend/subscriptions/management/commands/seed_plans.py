from django.core.management.base import BaseCommand

from subscriptions.models import Plan


class Command(BaseCommand):
    help = "Create default subscription plans"

    def handle(self, *args, **options):
        plans = [
            {
                "name": "Free",
                "description": "Free plan",
                "price": 0,
                "billing_cycle": "monthly",
                "max_projects": 3,
                "max_storage_gb": 1,
                "ai_credits": 50,
                "api_requests": 1000,
            },
            {
                "name": "Pro",
                "description": "Professional plan",
                "price": 499,
                "billing_cycle": "monthly",
                "max_projects": 50,
                "max_storage_gb": 100,
                "ai_credits": 5000,
                "api_requests": 50000,
            },
            {
                "name": "Enterprise",
                "description": "Enterprise plan",
                "price": 1999,
                "billing_cycle": "monthly",
                "max_projects": 999999,
                "max_storage_gb": 999999,
                "ai_credits": 999999,
                "api_requests": 999999,
            },
        ]

        for plan_data in plans:
            Plan.objects.update_or_create(
                name=plan_data["name"],
                defaults=plan_data,
            )

        self.stdout.write(
            self.style.SUCCESS("Subscription plans created successfully!")
        )