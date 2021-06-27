export const calculatePrice = (price, quantity) => price * quantity

export const formatPrice = price => price.toFixed(2).replace('.', ',')

export const calculateAndFormatPrice = (price, quantity) => {
  const calculatedPrice = calculatePrice(price, quantity)
  const priceFormatted = formatPrice(calculatedPrice)

  return priceFormatted
}
