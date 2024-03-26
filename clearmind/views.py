from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .models import Data
from .serializers import DataSerializer

class DataView(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

def main(request):
    return render(request, 'index.html')

def onetype_view(request, typename):
    data_objects = Data.objects.filter(type=Data.MEDITATION)
    print(data_objects)
    return render(request, 'index.html', {'data_objects': data_objects})

