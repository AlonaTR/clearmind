from django.db import models

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
    video = models.FileField(upload_to='videos/')
    test_result = models.IntegerField()
    info = models.TextField()

    def __str__(self):
        return self.name
