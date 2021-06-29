/**
 * ## Helper function to check if an object is empty
 *
 * _Because Javascript..._ 🤡
 *
 * @param {any} value
 * @returns Boolean indicating if the object is empty or not
 */
export const objectIsEmpty = value => {
  return !Object.keys(value).length
}
