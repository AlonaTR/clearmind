# Generated by Django 5.0.2 on 2024-03-13 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clearmind', '0003_data_image_alter_data_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='type',
            field=models.CharField(choices=[('Meditation', 'meditation'), ('Affirmation', 'affirmation'), ('Breathing', 'breathing')], max_length=100),
        ),
    ]
