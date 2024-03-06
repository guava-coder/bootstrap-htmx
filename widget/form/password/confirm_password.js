import * as valid from '../bootstrap5_validation.js'
import Bootstrap5ShowPassword from './bootstrap5_show_password.js'
export default function ConfirmPassword () {
  const psw = document.querySelector('#password')
  valid.passwordValidate(psw)

  const confirmedPw = document.querySelector('#confirmpw')
  valid.passwordConfirmed(confirmedPw, psw)

  Bootstrap5ShowPassword(document.querySelector('#showConfirmPsw'), '#confirmpw')
}
