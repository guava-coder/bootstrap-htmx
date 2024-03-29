(() => {
  const form = document.querySelector('#registerForm')
  form.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(e.target)

    let flag = true
    formData.forEach(i => {
      if (i === '') {
        flag = false
      }
    })

    if (flag) {
      if (document.querySelector('.is-invalid') === null) {
        const userData = Object.fromEntries(formData)
        alert(JSON.stringify(userData))
      } else {
        document.querySelector('#confirmpw').value = ''
        alert('form has invalid input')
      }
    } else {
      document.querySelector('#confirmpw').value = ''
      alert('form not complete')
    }
  })
})()
