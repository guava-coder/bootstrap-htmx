/**
 * Generate HTML for a bootstrap 5 floating form input.
 *
 * @param {string} name - the name of the input
 * @param {string} id - the id of the input
 * @return {string} the HTML for the floating form input
 */
function FloatingFormHTML (name = '', id = '') {
  return /* html */`
        <div class="form-floating mb-3" id="form${id}">
            <input type="text" class="form-control" name="${id}" id="${id}">
            <label for="${id}">${name}</label>
        </div>
    `
}

/**
 * Retrieves a form as a string based on the provided object.
 *
 * @param {Object} details - The object containing form details
 * @return {string} The form as a string
 */
export function getForm (details = {}) {
  let temp = ''
  const keys = Object.keys(details)
  for (const i in keys) {
    const k = keys[i]
    temp += FloatingFormHTML(details[k], k)
  }
  return temp
}
