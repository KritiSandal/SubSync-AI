from rest_framework.exceptions import PermissionDenied

from .models import Project


def check_project_limit(user):
    """
    Raises PermissionDenied if the user's plan limit is reached.
    """

    subscription = user.subscription

    current_projects = Project.objects.filter(
        owner=user
    ).count()

    if current_projects >= subscription.plan.max_projects:
        raise PermissionDenied(
            "Project limit reached. Upgrade your subscription."
        )