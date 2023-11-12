from rest_framework import serializers
from rest_framework.serializers import Serializer


class PageInfoSerializer(Serializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    name = serializers.CharField(max_length=50)
    salary = serializers.CharField(max_length=20)
    photo = serializers.ImageField()
    description = serializers.CharField()


class ExperienceSerializer(Serializer):
    page = serializers.PrimaryKeyRelatedField(read_only=True)
    title = serializers.CharField(max_length=50)
    description = serializers.CharField()


class SkillSerializer(Serializer):
    page = serializers.PrimaryKeyRelatedField(read_only=True)
    skill = serializers.CharField(max_length=20)


class CaseSerializer(Serializer):
    page = serializers.PrimaryKeyRelatedField(read_only=True)
    title = serializers.CharField(max_length=50)
    description = serializers.CharField()
    link = serializers.CharField(max_length=50)
