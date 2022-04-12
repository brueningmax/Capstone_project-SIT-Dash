from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel

class BootcampLocation(models.Model):
    location = models.CharField(
        verbose_name=_('location'),
        max_length=200,
        unique=True
    )
    name = models.CharField(
        verbose_name=_('name'),
        max_length=100,
        unique=True,
    )

    def __str__(self):
        if self.name.lower() == self.location.lower():
            return self.name
        return f'{self.name} ({self.location})'

    class Meta:
        ordering = ('-name',)
