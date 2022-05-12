from unicodedata import name
from django.conf import settings
from django.urls import path
from .views import Quiz,RandomQuestion, QuizQuestion
from django.conf import settings
from django.conf.urls.static import static

app_name='quiz'

urlpatterns=[
    path('', Quiz.as_view(), name='quiz'),
    path('r/<str:topic>/', RandomQuestion.as_view(), name='RandomQuestion'),
    path('single/<str:title>/', QuizQuestion.as_view(), name='QuizQuestion'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)