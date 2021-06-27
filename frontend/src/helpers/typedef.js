/**
 * @typedef iProduct
 *
 * @property {number} id
 * @property {string} name
 * @property {string} get_absolute_url
 * @property {string} description
 * @property {string} price
 * @property {string} get_image
 * @property {string} get_thumbnail
 */

/**
 * @typedef Product
 *
 * @property {number} id
 * @property {iProduct} product
 * @property {number} quantity
 */

/**
 * @typedef State
 *
 * @property {Product[]} cart
 * @property {number} total
 */

/**
 * @typedef Methods
 *
 * @property {({ quantity, id }: { quantity: number, id: string }) => void} addProduct
 * @property {(productId: number) => void} removeProduct
 */

/**
 * @typedef Store
 *
 * @property {State} state
 * @property {Methods} methods
 * @property {() => void} dispatchMiddlewares
 */
