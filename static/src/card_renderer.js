/**
 * Renders the card elements based on the given value and appends them to the specified card result element.
 *
 * @param {array} value - The array of objects containing the card data.
 * @param {Element} cardResult - The element to which the rendered card elements will be appended.
 * @return {void}
 */
export default function CardRenderer (value = [{ Title: 'content01', Sub: 999 }], cardResult = Element) {
  const cards = () => {
    let temp = ''
    for (const i in value) {
      temp += CardHTML(value[i], i)
    }
    return temp
  }
  cardResult.innerHTML = cards()
}

/**
 * Generate HTML for a card element based on content information.
 *
 * @param {{ Title: string, Sub: number }} content - The product information to display on the card
 * @param {number} index - The index of the card
 * @return {string} The HTML string for the card element
 */
function CardHTML (content = { Title: '', Sub: 0 }, index = 0) {
  const valueId = `v${index}`
  return /* html */`
        <div class="card border-info" id="card${valueId}">
            <div class="card-body py-4 px-4">
            <div class="d-flex align-items-center">
            <i class="bi bi-bag-fill" style="font-size: 2em;"></i>
                    <div class="ms-3 name me-auto">
                        <div id="${valueId}" hidden>${JSON.stringify(content)}</div>
                        <h5 class="font-bold">${content.Product_title}</h5>
                        <h6 class="text-muted mb-0">${content.Price}</h6>
                    </div>
                ${CardDropUp(valueId)}
                </div>
            </div>
        </div>
        </div>
        <div class="p-2 g-col-6"></div>
    `
}

/**
 * Generate the HTML for a dropup card element with dropdown options for editing and deleting.
 *
 * @param {string} id - The identifier for the card element
 * @return {string} The HTML string for the dropup card element
 */
function CardDropUp (id = '') {
  return /* html */`
  <div class="dropup">
  <button class="btn" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-three-dots-vertical" style="font-size: 2em;"></i>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" onclick="console.log('edit ${id}')">
            <i class="bi bi-pen-fill text-primary" style="font-size: 2em;"></i>
            Edit
          </a>
        </li>
        <li>
          <a class="dropdown-item" onclick="console.log('delete ${id}')">
            <i class="bi bi-trash-fill text-danger" style="font-size: 2em;"></i>
            Delete
          </a>
        </li>
      </ul>
  </div>
  `
}
