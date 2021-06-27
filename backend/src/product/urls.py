from django.urls import path, include
from product.views import LatestProductsList, ProductDetail

urlpatterns = [
    path('lastest-products/', LatestProductsList.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/',
         ProductDetail.as_view()),
]
