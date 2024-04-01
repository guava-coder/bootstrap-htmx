const Filter = {
  name: 'name',
  value: 'value',
  type: 'type'
}

/**
 * Creates and applies filters to the input element.
 *
 * @param {string} inputId - the ID of the input element
 * @param {Element} filterHolder - the element to hold the filters
 * @param {Array} filters - an array of filter objects containing name and value properties
 * @return {void}
 */
export default function UrlParameterBuilder (inputId = '', searchFilter = Element, filters = [Filter]) {
  generateFilters(searchFilter, filters)

  const searchInput = document.querySelector(inputId)
  setFiltersBehaviour(searchInput, filters)
}

function generateFilters (searchFilter = Element, filters = [Filter]) {
/**
  * Returning a html with list item, checkbox, label, and text input.
  * This is use to generate parameter in another search input.
  *
  * @param {string} [name="name"] name that display on FilterItem
  * @param {string} [value="value"] value that generate on search input
  * @return {string}
  */
  const FilterItem = (f = Filter) => {
    return /* html */`
  <li class="list-group-item">
    <input class="form-check-input me-1" id="${f.value}checkbox" type="checkbox" value="${f.value}">
    <div class="form-floating">
        <input class="form-control" type="${f.type}" id="${f.value}" placeholder="${f.name}">
        <label for="${f.value}">${f.name}</label>
    </div>
  </li>`
  }

  const filterItems = filters.map((Filter) => FilterItem(Filter)).join('')
  searchFilter.innerHTML = filterItems
}

function setFiltersBehaviour (searchInput = Element, filters = [{ name: '', value: '' }]) {
  for (const f of filters) {
    const cbox = document.querySelector(`#${f.value}checkbox`)
    const filterInput = document.querySelector(`#${f.value}`)

    cbox.onclick = (e) => {
      const checkbox = e.target

      addNewFilterToInputWhenChecked(checkbox, searchInput)

      const filter = `${checkbox.value}=`
      removeFilter(filter, searchInput)
    }

    filterInput.onclick = () => {
      cbox.checked = true
      addNewFilterToInputWhenChecked(cbox, searchInput)
    }

    filterInput.onchange = (e) => {
      const param = e.target
      const filter = `${param.id}=`

      removeFilter(filter, searchInput)

      addFilter(param.id, filter, searchInput)

      const input = searchInput.value

      if (input.includes(param.id) && !input.includes(param.value)) {
        const insertPosition = input.indexOf(param.id) + param.id.length + 1
        searchInput.value = input.slice(0, insertPosition) + param.value + input.slice(insertPosition)
      }
    }
  }
}

function addNewFilterToInputWhenChecked (checkbox = Element, searchInput = Element) {
  const filter = `${checkbox.value}=`
  if (checkbox.checked && !searchInput.value.includes(filter)) {
    addFilter(checkbox.value, filter, searchInput)
  }
}

function removeFilter (filter = '', searchInput = Element) {
  const searchValue = searchInput.value
  const values = searchValue.split('&')
  for (const s of values) {
    if (s.includes(filter)) {
      searchInput.value = searchValue.replace(s + '&', '')
      break
    }
  }
}

function addFilter (paramId = '', filter = '', searchInput = Element) {
  const param = document.querySelector(`#${paramId}`)
  searchInput.value += `${filter}${param.value}&`
  param.focus()
}
