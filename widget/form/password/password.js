import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

/**
 * Check if the password is invalid.
 *
 * @param {string} psw - The password to be checked
 * @return {boolean} Indicates whether the password is invalid or not
 */
export function isPasswordInvalid(psw = '') {
  return !/^(?=.*\d)(?=.*[A-Za-z])([^\s]){8,32}$/.test(psw)
}

/**
     * Validates the password input in the form.
     *
     * @param {Element} formInput - the input element in the form
     * @return {void} no return value
     */
export function passwordValidate(formInput = Element) {
  formInput.addEventListener('input', (e) => {
    e.target.classList.toggle(
      'is-invalid',
      isPasswordInvalid(e.target.value)
    )
  })
}

(() => {
  const psw = document.querySelector('#password')
  if (psw) {
    passwordValidate(psw)
    Bootstrap5ShowPassword(document.querySelector('#showPsw'), '#password')
  }
})();