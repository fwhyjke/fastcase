from django.contrib.auth.base_user import BaseUserManager
from users.utils import generate_verify_token, send_verify_email


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Field "email" must be set')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        from users.models import VerifyEmailToken
        token = generate_verify_token()
        VerifyEmailToken.objects.create(user=user, token=token)
        send_verify_email(email, token)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_verify', False)
        return self._create_user(email=email, password=password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_verify', True)
        return self._create_user(email=email, password=password, **extra_fields)