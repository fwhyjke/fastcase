from django.contrib import messages
from django.contrib.auth import login

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy, reverse
from django.views import View
from django.shortcuts import render
from django.views.generic import TemplateView, CreateView, FormView
from users.models import User
from fastcase.forms import *


# Create your views here.
class ShowPageView(TemplateView):
    template_name = 'fastcase/page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_id'] = self.request.GET.get('id')
        print(context)
        return context


class WelcomePageView(TemplateView):
    template_name = 'fastcase/welcome.html'


class CreatePageView(LoginRequiredMixin, FormView):
    template_name = 'fastcase/create_page.html'
    form_class = InfoForm
    login_url = 'login'

    def get_success_url(self):
        return reverse_lazy('page') + f'?id={self.object}'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['experience_formset'] = ExperienceFormSet(prefix='experiences')
        context['skill_formset'] = SkillFormSet(prefix='skills')
        context['case_formset'] = CaseFormSet(prefix='cases')
        return context

    def form_valid(self, form):
        if self.request.user.is_verify:
            experience_formset = ExperienceFormSet(self.request.POST, prefix='experiences')
            skill_formset = SkillFormSet(self.request.POST, prefix='skills')
            case_formset = CaseFormSet(self.request.POST, prefix='cases')

            form.instance.user = self.request.user

            if form.is_valid() and experience_formset.is_valid() and skill_formset.is_valid() and case_formset.is_valid():
                info = form.save()
                experiences = experience_formset.save(commit=False)
                skills = skill_formset.save(commit=False)
                print(skills)
                cases = case_formset.save(commit=False)

                for experience in experiences:
                    experience.page = info
                    experience.save()

                for skill in skills:
                    skill.page = info
                    skill.save()

                for case in cases:
                    case.page = info
                    case.save()

                self.object = info.pk

                return super().form_valid(form)
            else:
                return self.render_to_response(self.get_context_data(form=form))
        else:
            messages.error(self.request, "Вы должны пройти верификацию, чтобы заполнить эту форму.")
            return redirect('профиль')  # замените 'your_redirect_url' на ваш путь редиректа


class UserLoginView(LoginView):
    template_name = 'fastcase/login.html'
    form_class = LoginForm
    success_url = reverse_lazy('welcome')


class LogoutUserView(LogoutView):
    next_page = reverse_lazy('welcome')


class RegistrationUserView(CreateView):
    template_name = 'fastcase/registration.html'
    model = User
    form_class = RegistrationForm
    success_url = reverse_lazy('welcome')

    def form_valid(self, form):
        user = form.save()
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        login(self.request, user)
        return redirect('welcome')
