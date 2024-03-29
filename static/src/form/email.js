/**
 * @param {string} [value='']
 * @return {boolean}
 */
function isEmailInvalid (value = '') {
  return !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value)
}

(() => {
  document.addEventListener('htmx:afterRequest', () => {
    const email = document.querySelector('#email')
    if (email) {
      email.addEventListener('input', (e) => e.target.classList.toggle(
        'is-invalid',
        isEmailInvalid(e.target.value)
      ))
    }
  })
})()
