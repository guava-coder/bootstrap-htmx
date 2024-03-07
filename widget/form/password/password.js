import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

(() => {
  const psw = document.querySelector('#password')
  if (psw) {
    Bootstrap5ShowPassword(document.querySelector('#showPsw'), '#password')
  }
})();