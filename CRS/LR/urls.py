from django.urls import path
from . import views

urlpatterns=[
    path("mainpageCRS",views.mainpageCRS,name="mainpageCRS"),
    path("login",views.login,name="login"),
    path("registration",views.registration,name="registration")
] 