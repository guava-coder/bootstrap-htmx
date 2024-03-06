/**
 * @param {string} [value='']
 * @return {boolean}
 */
export function isEmailInvalid(value = '') {
  return !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value)
}

/**
     * Validates the email input in the form.
     *
     * @param {Element} formInput - the input element to validate
     * @return {void}
     */
export function emailValidate(formInput = Element) {
  formInput.addEventListener('input', (e) => e.target.classList.toggle(
    'is-invalid',
    isEmailInvalid(e.target.value)
  ))
}

(() => {
  const email = document.querySelector('#email')
  if(email){
    emailValidate(email)
  }
})();
