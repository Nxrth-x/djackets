from rest_framework import serializers
from product.models import Product


class ProductSerialzier(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    def get_category(self, obj: Product):
        return obj.category.name

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'get_absolute_url',
            'description',
            'price',
            'category',
            'get_image',
            'get_thumbnail',
        ]
