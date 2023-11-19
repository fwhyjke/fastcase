from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.forms import HiddenInput, inlineformset_factory
from fastcase.models import Info, Skill, Experience, Case
from users.models import User


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


ExperienceFormSet = inlineformset_factory(Info, Experience, form=ExperienceForm, extra=20)
SkillFormSet = inlineformset_factory(Info, Skill, form=SkillForm, extra=20)
CaseFormSet = inlineformset_factory(Info, Case, form=CaseForm, extra=20)


class RegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['email', 'username', 'password1', 'password2']

    def save(self, commit=True):
        data = self.cleaned_data
        data['password'] = data.pop('password1')
        del data['password2']
        user = User.objects.create_user(**data)
        return user


class LoginForm(AuthenticationForm):
    class Meta:
        fields = ['email', 'password']