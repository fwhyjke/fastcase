from django.urls import path
from fastcase.views import *

urlpatterns = [
    path('', WelcomePageView.as_view(), name='welcome'),
    path('page', ShowPageView.as_view(), name='page'),
    path('create-page', CreatePageView.as_view(), name='create-page'),
]