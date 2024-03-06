import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

/**
 * @param {string} [input='']
 * @param {string} [confirm='']
 * @return {boolean}
 */
export function isPasswordNotConfirmed(input = '', confirm = '') {
  return input !== confirm || input === ''
}

/**
     * Listens for input on formInput and toggles 'is-invalid' class based on password confirmation.
     *
     * @param {Element} formInput - the form input element
     * @param {Element} input - the input element
     * @return {void}
     */
export function passwordConfirmed(formInput = Element, input = Element) {
  formInput.addEventListener('input', (e) => e.target.classList.toggle(
    'is-invalid',
    isPasswordNotConfirmed(input.value, e.target.value)
  ))
}

(() => {
  const psw = document.querySelector('#password')
  const confirmedPw = document.querySelector('#confirmpw')

  if (psw && confirmedPw) {
    passwordConfirmed(confirmedPw, psw)
    Bootstrap5ShowPassword(document.querySelector('#showConfirmPsw'), '#confirmpw')
  }
})();
