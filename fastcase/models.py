from django.db import models
from django.db.models import CASCADE

from users.models import User


class Info(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    name = models.CharField(max_length=50)
    salary = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='images/users_photo', blank=True)
    description = models.TextField()


class Experience(models.Model):
    page = models.ForeignKey(Info, on_delete=CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()


class Skill(models.Model):
    page = models.ForeignKey(Info, on_delete=CASCADE)
    skill = models.CharField(max_length=20)


class Case(models.Model):
    page = models.ForeignKey(Info, on_delete=CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()
    link = models.CharField(max_length=50)
