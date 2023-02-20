from django.db import models

class Registration(models.Model):
    username=models.CharField(max_length=20)
    email=models.EmailField(max_length=40,blank=True)
    password=models.CharField(max_length=20)
    cpassword=models.CharField(max_length=20)