import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

/**
 * Check if the password is invalid.
 * Password must have 8 to 32 characters, at least one letter and
 * one number
 * @param {string} psw - The password to be checked
 * @return {boolean} Indicates whether the password is invalid or not
 */
export function isPasswordInvalid (psw = '') {
  return !/^(?=.*\d)(?=.*[A-Za-z])([^\s]){8,32}$/.test(psw)
}

/**
 * @param {string} [input='']
 * @param {string} [confirm='']
 * @return {boolean}
 */
export function isPasswordNotConfirmed (input = '', confirm = '') {
  return input !== confirm || input === '' || isPasswordInvalid(confirm)
}

(() => {
  document.addEventListener('htmx:afterRequest', () => {
    try {
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
    } catch (err) {
      console.log(err)
    }
  })
})()
