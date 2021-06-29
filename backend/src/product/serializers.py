from rest_framework import serializers
from product.models import Product, Category


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'name',
            'price',
            'absolute_url',
            'thumbnail_url',
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'description',
            'price',
            'category',
            'absolute_url',
            'image_url',
            'thumbnail_url',
        ]


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'name',
            'slug',
        ]


class CategoryDetailSerializer(serializers.ModelSerializer):
    products = ProductListSerializer(read_only=True, many=True)

    class Meta:
        model = Category
        fields = [
            'name',
            'slug',
            'products',
        ]
