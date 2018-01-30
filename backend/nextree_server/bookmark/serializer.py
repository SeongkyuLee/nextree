from rest_framework import serializers
from bookmark.models import Post

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('title','topic','url','description')

