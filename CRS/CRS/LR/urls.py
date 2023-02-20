from django.urls import path
from . import views

urlpatterns=[
    path('Layout',views.Layout,name="Layout"),
    path('Registration',views.Registration,name="Registration"),
    path('Login',views.Login,name="Login"),
    path('Search',views.Search,name="Search"),
    path('EditProfile',views.EditProfile,name="EditProfile"),
    path("AccountDetails",views.AccountDetails,name="AccountDetails"),
    path("GroupDeatils",views.GroupDeatails,name="GroupDeatils"),
    path("ForgetPassword",views.ForgetPassword,name="ForgetPassword")
]