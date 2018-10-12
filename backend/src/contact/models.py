from django.db import models

# Create your models here.
class Message(models.Model):
	full_name = models.CharField(max_length=256, null=True, blank=True)
	email = models.EmailField(null=True, blank=True)
	phone = models.CharField(max_length=12, null=True, blank=True)
	message = models.TextField(null=True, blank=True)
	
	def __unicode__(self):
		return self.full_name