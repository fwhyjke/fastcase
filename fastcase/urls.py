from django.urls import path
from fastcase.views import *

urlpatterns = [
    path('', ShowPageView.as_view(), name='page')
]