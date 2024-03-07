import Bootstrap5ShowPassword from './bootstrap5_show_password.js'

(() => {
  document.addEventListener('htmx:afterRequest', () => {
    try {
      const show = document.querySelector('#showPsw')
      if (show) { Bootstrap5ShowPassword(show, '#password') }
    } catch (err) {
      console.log(err)
    }
  })
})()
