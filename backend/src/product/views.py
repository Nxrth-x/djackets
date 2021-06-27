from django.http import Http404
from django.db.models import query
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from product.models import Product
from product.serializers import ProductSerialzier


class LatestProductsList(generics.ListAPIView):
    serializer_class = ProductSerialzier

    def get_queryset(self):
        queryset = Product.objects.all()[0:4]

        return queryset


class ProductDetail(APIView):
    def get_object(self, category_slug, product_slug):
        try:
            product = Product.objects.filter(
                category__slug=category_slug).get(slug=product_slug)
            return product
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, category_slug, product_slug, format=None):
        product = self.get_object(category_slug, product_slug)
        serializer = ProductSerialzier(product)
        return Response(serializer.data)
