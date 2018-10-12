from django.urls import include, path, re_path

from .views import (MessageCreateAPIView)

urlpatterns = [
  path('create/message', MessageCreateAPIView.as_view()),
 
]