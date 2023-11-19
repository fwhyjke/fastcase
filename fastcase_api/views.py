from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import User, VerifyEmailToken
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


class VerifyEmailAPI(APIView):
    def get(self, request, **kwargs):
        token = self.kwargs['token']
        user = VerifyEmailToken.objects.get(token=token).user
        user.is_verify = True
        user.save()
        return redirect('/cabinet')


class GetUserPagesAPI(APIView):
    def get(self, request, **kwargs):
        user = self.kwargs['user']
        info_objects = Info.objects.filter(user=user)
        ids = list(reversed([i.pk for i in info_objects]))
        links = list(reversed([f'http://127.0.0.1:8000/page?id={i.pk}' for i in info_objects]))

        pages = []
        for page in list(info_objects):
            page = dict(PageInfoSerializer(page).data)
            page['link'] = links.pop()
            page['id'] = ids.pop()
            pages.append(page)

        data = dict()
        data['user_id'] = user
        data['pages'] = pages

        return Response(data)
