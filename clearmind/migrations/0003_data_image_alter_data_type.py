# Generated by Django 5.0.2 on 2024-03-13 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clearmind', '0002_alter_data_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='image',
            field=models.ImageField(default='default_image.jpg', upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='data',
            name='type',
            field=models.CharField(choices=[('Meditation', 'Meditation'), ('Affirmation', 'Affirmation'), ('Breathing', 'Breathing')], max_length=100),
        ),
    ]
