from rest_framework import serializers
from applications.models import Application

from bootcamps.models import Bootcamp

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
        depth = 1


class BootcampsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bootcamp
        fields = ('name', 'start_date', 'bootcamp_location',)


class LatestApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('first_name', 'last_name')
    bootcamp = BootcampsSerializer(read_only=True)

