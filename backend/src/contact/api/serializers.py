from rest_framework import serializers
from contact.models import Message

def validNumber(phone_number):
    if len(phone_number) != 12:
        return False
    for i in range(12):
        if i in [3,7]:
            if phone_number[i] != '-':
                return False
        elif not phone_number[i].isalnum():
            return False
    return True

class MessageCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = Message
    fields = [
      'full_name',
      'email',
      'phone',
      'message',
    ]

  def create(self, validated_data):
    
    full_name = validated_data['full_name']
    email = validated_data['email']
    phone = validated_data['phone']
    message = validated_data['message']

    if len(full_name) == 0 or len(email) == 0 or len(phone) == 0 or len(message) == 0:
      raise serializers.ValidationError({
            'non_field_errors':  ['All fields are required.']
      })

    if not validNumber(phone):
      raise serializers.ValidationError({
          'phone':  ['Please use a valid phone number i.e. 781-321-4567']
      })
    message_obj = Message.objects.create(
      full_name=full_name,
      email=email,
      phone=phone,
      message=message,
      
    )
    message_obj.save()

    return validated_data