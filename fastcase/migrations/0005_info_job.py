# Generated by Django 4.2.7 on 2023-11-15 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fastcase', '0004_rename_page_info'),
    ]

    operations = [
        migrations.AddField(
            model_name='info',
            name='job',
            field=models.CharField(default='prog', max_length=50),
            preserve_default=False,
        ),
    ]
