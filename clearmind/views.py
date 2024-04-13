from django.shortcuts import render
from .models import *
from rest_framework import viewsets
from .models import Data, TestQuestion
from .serializers import DataSerializer, TestQuestionSerializer
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ('email',)

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = CustomUserCreationForm(data)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return JsonResponse({'status': 'success', 'user': {'id': user.id, 'username': user.username, 'email': user.email}})
        else:
            return JsonResponse({'status': 'error', 'errors': form.errors})

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success', 'user': {'id': user.id, 'username': user.username, 'email': user.email}})  
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'})



class ItemDetailView(viewsets.ReadOnlyModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    def get_object(self):
        item_id = self.kwargs.get('pk')
        return Data.objects.get(id=item_id)

class MeditationDataView(viewsets.ModelViewSet):
    queryset = Data.objects.filter(type=Data.MEDITATION)  
    serializer_class = DataSerializer

class AffirmationDataView(viewsets.ModelViewSet):
    queryset = Data.objects.filter(type=Data.AFFIRMATION)  
    serializer_class = DataSerializer

class BreathingDataView(viewsets.ModelViewSet):
    queryset = Data.objects.filter(type=Data.BREATHING)  
    serializer_class = DataSerializer

class AllDataView(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer


class TestQuestionView(viewsets.ReadOnlyModelViewSet):
    queryset = TestQuestion.objects.all()
    serializer_class = TestQuestionSerializer

def main(request):
    return render(request, 'index.html')

def onetype_view(request, typename):
    #data_objects = Data.objects.filter(type=Data.MEDITATION)
    return render(request, 'index.html')

def oneitem_view(request, itemid):
    return render(request, 'index.html')


