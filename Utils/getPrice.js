export const getProductPrice = product => {
  if (product.priceRange) {
    if (product.priceRange.regular) {
      return product.priceRange.regular.high
    } else {
      return product.priceRange.selling.high
    }
  } else {
    return product.price.regular
  }
}