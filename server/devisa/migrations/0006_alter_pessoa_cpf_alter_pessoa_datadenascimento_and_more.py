# Generated by Django 4.2.5 on 2023-09-26 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devisa', '0005_rename_cadatradopor_pessoa_cadastradopor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pessoa',
            name='cpf',
            field=models.CharField(max_length=14, null=True),
        ),
        migrations.AlterField(
            model_name='pessoa',
            name='dataDeNascimento',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='pessoa',
            name='endereco',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='pessoa',
            name='observacao',
            field=models.CharField(max_length=600, null=True),
        ),
    ]
