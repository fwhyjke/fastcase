from django.urls import path
from fastcase_api.views import *

urlpatterns = [
    path('get_page_info/', PageAPI.as_view()),
    path('get_user_pages/<int:user>', GetUserPagesAPI.as_view()),
]