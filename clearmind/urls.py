from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from . import views
from rest_framework import routers
from .views import *
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'meditation', MeditationDataView)
router.register(r'affirmation', AffirmationDataView)


urlpatterns = [
    path('admin/', admin.site.urls),   
    path('home',views.main, name ='main'),
    path('onetype/<str:typename>',views.onetype_view, name ='onetype'),
    path('api/', include(router.urls)),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)