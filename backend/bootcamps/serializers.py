from rest_framework import serializers

from applications.models import Application
from bootcamps.models import Bootcamp


class BootcampSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bootcamp
        fields = ('pk' ,'name')
        depth = 1


class ApplicationUpComingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('status',)


class BootcampUpComingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bootcamp
        fields = ('name', 'bootcamp_location', 'start_date', 'applications')
    applications = ApplicationUpComingSerializer(read_only=True, many=True)



