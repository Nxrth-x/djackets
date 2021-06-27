import api from '../services/api'

export const getLatestProducts = async () => {
  const { data } = await api.get('lastest-products/')

  return data
}

export const getProduct = async (categorySlug, productSlug) => {
  const { data } = await api.get(`/products/${categorySlug}/${productSlug}`)

  return data
}
