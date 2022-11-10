from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages

def mainpageCRS(request):
    return render(request,"LR/mainpageCRS.html")
def login(request):
    return render(request,"LR/login.html")
def registration(request):
    if request.method=="POST":
        print(request)
        print(request.POST)
        print(request.POST.keys())
        print(request.POST.get("Name"))
        Name=request.POST['Name']
        Email=request.POST['email']
        pwd=request.POST['Password']
        pwd1=request.POST['cpassword']
        
        user=User.objects.create_user(username=Name,email=Email,password=pwd)
        user.save();
        print('user created')
        return redirect('/')
    else:
        return render(request,"LR/registration.html")