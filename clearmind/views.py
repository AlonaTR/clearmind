from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .models import Data
from .serializers import DataSerializer

class MeditationDataView(viewsets.ModelViewSet):
    queryset = Data.objects.filter(type=Data.MEDITATION)  
    serializer_class = DataSerializer

class AffirmationDataView(viewsets.ModelViewSet):
    queryset = Data.objects.filter(type=Data.AFFIRMATION)  
    serializer_class = DataSerializer

class AllDataView(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

def main(request):
    return render(request, 'index.html')

def onetype_view(request, typename):
    #data_objects = Data.objects.filter(type=Data.MEDITATION)
    return render(request, 'index.html')

