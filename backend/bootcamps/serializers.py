from rest_framework import serializers
from bootcamp.models import Bootcamp


class BootcampSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bootcamp
        fields = '__all__'
        depth = 1
