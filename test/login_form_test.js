(() => {
  const form = document.querySelector('#loginForm')
  form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData)

    let flag = true
    formData.forEach(i => {
      if (i === '') {
        flag = false
      }
    })

    if (flag) {
      if (document.querySelector('.is-invalid') === null) {
        alert(JSON.stringify(userData))
      } else {
        alert('form has invalid input')
      }
    } else {
      alert('form not complete')
    }
  })
})()
