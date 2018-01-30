from django.db import models
from tagging.fields import TagField

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    url = models.URLField('url',unique=True)
    description = models.CharField(max_length=500, blank=True, null=True)
    topic = models.CharField(max_length=200, blank=True, null=True)
    tag = TagField()
    create_date = models.DateTimeField('Create Date', auto_now_add=True)
    modify_date = models.DateTimeField('Modify Date', auto_now=True)


    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
        db_table = 'urls'
        ordering = ('-modify_date',)







