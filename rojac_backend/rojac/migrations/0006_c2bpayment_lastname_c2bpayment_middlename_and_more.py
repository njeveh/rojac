# Generated by Django 4.1.1 on 2022-09-21 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("rojac", "0005_alter_c2bpayment_transtime"),
    ]

    operations = [
        migrations.AddField(
            model_name="c2bpayment",
            name="LastName",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name="c2bpayment",
            name="MiddleName",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name="c2bpayment",
            name="TransTime",
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
    ]