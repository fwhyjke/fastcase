from django.shortcuts import render
from django.views import View
from django.shortcuts import render


# Create your views here.
class ShowPageView(View):
    def get(self, request, *args, **kwargs):
        template = 'fastcase/page.html'
        return render(request, template_name=template)
