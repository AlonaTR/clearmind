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
from django.db.models import Count, Case, When, IntegerField


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


def user_activity_meditation(request):
    user_activities = UserActivity.objects.filter(user=request.user, type=UserActivity.MEDITATION)
    if not user_activities.exists():
        return JsonResponse([{'type': UserActivity.MEDITATION, 'count': 0}], safe=False)
    else:
        activities_grouped_by_type = user_activities.values('type').annotate(
            count=Count('type')
        )
        activity_data = list(activities_grouped_by_type)
        return JsonResponse(activity_data, safe=False)

def user_activity_affirmation(request):
    user_activities = UserActivity.objects.filter(user=request.user, type=UserActivity.AFFIRMATION)
    if not user_activities.exists():
        return JsonResponse([{'type': UserActivity.AFFIRMATION, 'count': 0}], safe=False)
    else:
        activities_grouped_by_type = user_activities.values('type').annotate(
            count=Count('type')
        )
        activity_data = list(activities_grouped_by_type)
        return JsonResponse(activity_data, safe=False)


def user_activity_breathing(request):
    user_activities = UserActivity.objects.filter(user=request.user, type=UserActivity.BREATHING)
    if not user_activities.exists():
        return JsonResponse([{'type': UserActivity.BREATHING, 'count': 0}], safe=False)
    else:
        activities_grouped_by_type = user_activities.values('type').annotate(
            count=Count('type')
        )
        activity_data = list(activities_grouped_by_type)
        return JsonResponse(activity_data, safe=False)


def user_activity_calendar(request):
    user_activities = UserActivity.objects.filter(user=request.user)
    activities_grouped_by_date = user_activities.values('date').annotate(
        count=Count('date'),
        level=Case(
            When(count=1, then=1),
            When(count__range=(2, 3), then=2),
            When(count__gte=4, then=3),
            default=0,
            output_field=IntegerField(),
        )
    )
    activity_data = list(activities_grouped_by_date)
    return JsonResponse(activity_data, safe=False)

@csrf_exempt
def record_activity_view(request):
    if request.method == 'POST':
        user = request.user
        if user.is_authenticated:
            data = json.loads(request.body)
            date = data.get('date')
            type = data.get('type')
            UserActivity.objects.create(user=user, date=date, type=type)
            return JsonResponse({'status': 'success'}, status=201)
        return JsonResponse({'status': 'error', 'message': 'User is not authenticated'}, status=401)



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


