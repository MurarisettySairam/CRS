# Generated by Django 4.1.3 on 2022-12-15 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LR', '0002_alter_registration_cpassword_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='cpassword',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='registration',
            name='password',
            field=models.CharField(max_length=20),
        ),
    ]