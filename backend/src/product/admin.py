from django.contrib import admin
from product.models import Category, Product, CustomUser

from django.contrib.auth.admin import UserAdmin

admin.site.register(CustomUser, UserAdmin)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'slug'
    ]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'slug',
        'created_at',
        'updated_at',
    ]
