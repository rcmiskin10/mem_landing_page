from rest_framework import viewsets, permissions, generics

from contact.models import Message
from .serializers import (MessageCreateSerializer)

class MessageCreateAPIView(generics.CreateAPIView):
	permission_classes = [permissions.AllowAny]
	queryset = Message.objects.all()
	serializer_class = MessageCreateSerializer