from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib import messages

# Create your views here.
def Layout(request):
    return render(request,'LR/layout.html')
def Registration(request):
    if request.method=='POST':
        username=request.POST['Name']
        email=request.POST['email']
        password=request.POST['Password']
        cpassword=request.POST['cpassword']
        
        if password==cpassword:
            if User.objects.filter(username=username).exists():
                messages.info(request,"UserName Already Taken")
                return redirect('Registration')
            elif User.objects.filter(email=email).exists():
                messages.info(request,"Email Already Taken")
                return redirect('Registration')
            else:
                user=User.objects.create_user(username=username,password=password,email=email)
                user.save()
                return redirect('Login')
        else:
            return redirect('Registration')
    else:
        return render(request,'LR/registration.html')
def Login(request):
    if request.method=='POST':
        username=request.POST['Name']
        password=request.POST['Password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect("Search")
        else:
            messages.info(request,"INVALID CREDENTIALS")
            return redirect('Login')
    else:
        return render(request,'LR/login.html')
def Search(request):
    return render(request,'LR/search.html')
def EditProfile(request):
    return render(request,'LR/editprofile.html')
def AccountDetails(request):
    return render(request,"LR/accountdetails.html")
def GroupDeatails(request):
    return render(request,"LR/groupdetails.html")
def ForgetPassword(request):
    return render(request,"LR/forgetpassword.html")