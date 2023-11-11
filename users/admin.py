from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = User
    ordering = ['email']
    list_display = ['email', 'username', 'is_active', 'is_superuser']
    fieldsets = (
        ('Email and PW', {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_superuser')})
    )
    add_fieldsets = (
        ('New user', {'fields': ('email', 'password1', 'password2',),
                      'description': 'Crate new user'})
    )

    list_filter = ('date_joined',)


admin.site.register(User, CustomUserAdmin)
