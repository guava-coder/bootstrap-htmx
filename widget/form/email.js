import * as valid from './bootstrap5_validation.js'

export default function Email () {
  const email = document.querySelector('#email')
  valid.emailValidate(email)
}
