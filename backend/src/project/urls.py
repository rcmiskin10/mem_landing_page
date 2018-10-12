from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static

from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/contact/', include('contact.api.urls')),
  re_path('.*', TemplateView.as_view(template_name='index.html')),
]
