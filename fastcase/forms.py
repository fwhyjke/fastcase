from django import forms
from django.forms import HiddenInput, inlineformset_factory

from .models import *


class InfoForm(forms.ModelForm):
    class Meta:
        model = Info
        fields = ('name', 'job', 'salary', 'photo', 'description',)
        widgets = {
            'user': HiddenInput()
        }


class ExperienceForm(forms.ModelForm):
    class Meta:
        model = Experience
        fields = ['title', 'description']


class SkillForm(forms.ModelForm):
    class Meta:
        model = Skill
        fields = ['skill']


class CaseForm(forms.ModelForm):
    class Meta:
        model = Case
        fields = ['title', 'description', 'link']


ExperienceFormSet = inlineformset_factory(Info, Experience, form=ExperienceForm, extra=5)
SkillFormSet = inlineformset_factory(Info, Skill, form=SkillForm, extra=5)
CaseFormSet = inlineformset_factory(Info, Case, form=CaseForm, extra=5)
