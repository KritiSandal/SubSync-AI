from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField()

    plan = serializers.CharField()
    status = serializers.CharField()
    expires_at = serializers.DateTimeField()

    total_projects = serializers.IntegerField()
    remaining_projects = serializers.IntegerField()