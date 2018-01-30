from django.shortcuts import render
from rest_framework import viewsets
from bookmark.models import Post
from bookmark.serializer import PostSerializer
# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
