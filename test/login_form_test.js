(() => {
  document.querySelector('#wait').addEventListener('htmx:afterRequest', e => {
    const form = document.querySelector('#loginForm')
    form.addEventListener('submit', e => {
      e.preventDefault()

      const formData = new FormData(e.target)
      const userData = Object.fromEntries(formData)
      alert(JSON.stringify(userData))
    })
  })
})()
