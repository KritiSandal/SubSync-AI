from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            "id",
            "title",
            "description",
            "status",
            "created_at",
            "updated_at",
        )

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )

    def validate_title(self, value):
        value = value.strip()

        if len(value) < 3:
            raise serializers.ValidationError(
                "Title must be at least 3 characters long."
            )

        return value

    def validate(self, attrs):
        request = self.context.get("request")

        if request and request.method == "POST":
            title = attrs.get("title")

            if Project.objects.filter(
                owner=request.user,
                title=title,
            ).exists():
                raise serializers.ValidationError(
                    {
                        "title": "You already have a project with this title."
                    }
                )

        return attrs