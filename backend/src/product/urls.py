from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from product.views import CategoryDetail, LatestProductsList, ProductDetail

urlpatterns = [
    path('latest-products/', LatestProductsList.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/',
         ProductDetail.as_view()),
    path('token/', ObtainAuthToken.as_view()),
    path('categories/<slug:category_slug>', CategoryDetail.as_view())
]
