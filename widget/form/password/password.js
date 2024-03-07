import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

/**
 * Check if the password is invalid.
 * Password must have 8 to 32 characters, at least one letter and
 * one number
 * @param {string} psw - The password to be checked
 * @return {boolean} Indicates whether the password is invalid or not
 */
export function isPasswordInvalid(psw = '') {
  return !/^(?=.*\d)(?=.*[A-Za-z])([^\s]){8,32}$/.test(psw)
}

(() => {
  const psw = document.querySelector('#password')
  if (psw) {
    psw.addEventListener('input', (e) => {
      e.target.classList.toggle(
        'is-invalid',
        isPasswordInvalid(e.target.value)
      )
    })
    Bootstrap5ShowPassword(document.querySelector('#showPsw'), '#password')
  }
})();