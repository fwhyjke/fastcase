from django.urls import path
from fastcase.views import *

urlpatterns = [
    path('', WelcomePageView.as_view(), name='welcome'),
    path('page', ShowPageView.as_view(), name='page'),
    path('create-page', CreatePageView.as_view(), name='create-page'),
    path('login', UserLoginView.as_view(), name='login'),
    path('logout', LogoutUserView.as_view(), name='logout'),
    path('registration', RegistrationUserView.as_view(), name='registration'),
    path('cabinet', CabinetView.as_view(), name='cabinet'),
]