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
router.register(r'breathing', BreathingDataView)
router.register(r'test-questions', TestQuestionView)
router.register(r'data', AllDataView)
router.register(r'items', ItemDetailView, basename='item')


urlpatterns = [
    path('admin/', admin.site.urls),   
    path('home',views.main, name ='main'),
    path('allitems',views.main, name ='main'),
    path('test',views.main, name ='main'),
    path('log-in',views.main, name ='login'),
    path('account',views.main, name ='account'),
    path('onetype/<str:typename>',views.onetype_view, name ='onetype'),
    path('item/<int:itemid>',views.oneitem_view, name ='oneitem'),
    path('api/', include(router.urls)),
    path('api/register/', register_view, name='api_register'),
    path('api/login/', login_view, name='api_login'),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)