from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from . import views
from rest_framework import routers
from .views import DataView

router = routers.DefaultRouter()
router.register(r'data', DataView)

urlpatterns = [
    path('admin/', admin.site.urls),
    #re_path(r'^(?P<path>.*)$', views.main, name='main'),    
    path('home',views.main, name ='main'),
    path('onetype/<str:typename>',views.onetype_view, name ='onetype'),
    path('api/', include(router.urls)),
]
