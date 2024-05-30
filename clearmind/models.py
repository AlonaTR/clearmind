from django.db import models
from django.contrib.auth.models import User
import requests
from django.core.files import File
from io import BytesIO

class Data(models.Model):
    MEDITATION = 'Meditation'
    AFFIRMATION = 'Affirmation'
    BREATHING = 'Breathing'

    TYPE_CHOICES = [
        (MEDITATION, 'meditation'),
        (AFFIRMATION, 'affirmation'),
        (BREATHING, 'breathing'),
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100, choices=TYPE_CHOICES)
    image = models.ImageField(upload_to='images/', default='default_image.jpg')
    video_id = models.CharField(max_length=100, default='inpok4MKVLM') 
    test_result = models.IntegerField()
    info = models.TextField()

    def save(self, *args, **kwargs):
        if not self.image or self.image == 'default_image.jpg':
            thumbnail_url = f'https://img.youtube.com/vi/{self.video_id}/maxresdefault.jpg'
            response = requests.get(thumbnail_url)
            if response.status_code == 200:
                img_temp = BytesIO(response.content)
                self.image.save(f'{self.video_id}.jpg', File(img_temp), save=False)
        super(Data, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


from django.db import models

class TestQuestion(models.Model):
    question_text = models.CharField(max_length=255)
    answer_choice_1 = models.CharField(max_length=255)
    answer_choice_1_points = models.IntegerField(default=0)
    answer_choice_2 = models.CharField(max_length=255)
    answer_choice_2_points = models.IntegerField(default=0)
    answer_choice_3 = models.CharField(max_length=255)
    answer_choice_3_points = models.IntegerField(default=0)
    answer_choice_4 = models.CharField(max_length=255)
    answer_choice_4_points = models.IntegerField(default=0)

    def __str__(self):
        return self.question_text


class UserActivity(models.Model):
    MEDITATION = 'Meditation'
    AFFIRMATION = 'Affirmation'
    BREATHING = 'Breathing'

    TYPE_CHOICES = [
        (MEDITATION, 'meditation'),
        (AFFIRMATION, 'affirmation'),
        (BREATHING, 'breathing'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    type = models.CharField(max_length=100, choices=TYPE_CHOICES, default=MEDITATION )
    def __str__(self):
        return f"{self.user.username} - {self.date}"



