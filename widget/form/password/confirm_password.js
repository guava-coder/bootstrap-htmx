import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

/**
 * @param {string} [input='']
 * @param {string} [confirm='']
 * @return {boolean}
 */
function isPasswordNotConfirmed(input = '', confirm = '') {
  return input !== confirm || input === '' || isPasswordInvalid(confirm)
}

/**
 * Check if the password is invalid.
 *
 * @param {string} psw - The password to be checked
 * @return {boolean} Indicates whether the password is invalid or not
 */
function isPasswordInvalid(psw = '') {
  return !/^(?=.*\d)(?=.*[A-Za-z])([^\s]){8,32}$/.test(psw)
}

(() => {
  const psw = document.querySelector('#password')
  const confirmedPw = document.querySelector('#confirmpw')

  if (psw && confirmedPw) {
    psw.addEventListener('input', (e) => {
      e.target.classList.toggle(
        'is-invalid',
        isPasswordInvalid(e.target.value)
      )
      confirmedPw.classList.toggle(
        'is-invalid',
        isPasswordNotConfirmed(confirmedPw.value, e.target.value)
      )
    })

    confirmedPw.addEventListener('input', (e) =>
      e.target.classList.toggle(
        'is-invalid',
        isPasswordNotConfirmed(psw.value, e.target.value)
      ))

    Bootstrap5ShowPassword(document.querySelector('#showPsw'), '#password')
    Bootstrap5ShowPassword(document.querySelector('#showConfirmPsw'), '#confirmpw')
  }
})();
