from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from fastcase.models import *
from fastcase_api.serializers import PageInfoSerializer, ExperienceSerializer, SkillSerializer, CaseSerializer


# Create your views here.

class PageAPI(APIView):
    def get(self, request):
        pk = request.query_params.get('id')
        info_object = Info.objects.get(pk=pk)
        info = dict(PageInfoSerializer(info_object).data)

        experience_objects = Experience.objects.filter(page=pk)
        experience = [ExperienceSerializer(obj).data for obj in experience_objects]
        for job in experience:
            del job['page']

        skill_objects = Skill.objects.filter(page=pk)
        skill = [SkillSerializer(obj).data['skill'] for obj in skill_objects]

        case_objects = Case.objects.filter(page=pk)
        case = [CaseSerializer(obj).data for obj in case_objects]
        for c in case:
            del c['page']

        data = info
        data['experience'] = experience
        data['skill'] = skill
        data['case'] = case

        return Response(data)
