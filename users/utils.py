import secrets

from django.core.mail import send_mail

from fastcase_core.settings import EMAIL_HOST_USER


def generate_verify_token():
    return secrets.token_urlsafe(16)


def send_verify_email(email, token):
    subject = 'Подтверждение почты для fastcse'
    message = (f'Чтобы завершить регистрацию и начать пользоваться всеми возможностями сайта,\n'
               f'подтвердите ваш email, перейдя по ссылке\n'
               f'http://127.0.0.1:8000/verify-email/{token}')
    from_email = EMAIL_HOST_USER
    recipient_list = [email,]

    send_mail(subject, message, from_email, recipient_list)

