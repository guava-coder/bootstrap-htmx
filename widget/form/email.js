export default function Email () {
  const email = document.querySelector('#email')
  emailValidate(email)
}

/**
 * @param {string} [value='']
 * @return {boolean}
 */
export const isEmailInvalid = (value = '') => {
  return !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value)
}

/**
     * Validates the email input in the form.
     *
     * @param {Element} formInput - the input element to validate
     * @return {void}
     */
function emailValidate (formInput = Element) {
  formInput.addEventListener('input', (e) => e.target.classList.toggle(
    'is-invalid',
    isEmailInvalid(e.target.value)
  ))
}