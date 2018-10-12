from django.contrib import admin
from .models import Message

class MessageAdmin(admin.ModelAdmin):
    list_display = ( 'id','full_name', 'email', 'phone')
    class Meta:
        model = Message
        
admin.site.register(Message, MessageAdmin)

