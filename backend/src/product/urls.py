from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from product.views import LatestProductsList, ProductDetail

urlpatterns = [
    path('lastest-products/', LatestProductsList.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/',
         ProductDetail.as_view()),
    path('token/', ObtainAuthToken.as_view()),
]
