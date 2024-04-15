const parameters = {
  element: Element,
  min: '1850-01-01'
}

/**
 * Initializes a date picker using the specified parameters.
 *
 * @param {
 * {
 *    selector: string
 *    min: string
 * }
 * } v - The parameters for initializing the date picker.
 * @return {void}
 */
export default function DatePicker (v = parameters) {
  const publicationDate = v.element

  publicationDate.type = 'date'
  publicationDate.min = v.min

  const currentDate = new Date().toJSON().slice(0, 10)
  publicationDate.max = `${currentDate}`
}
