Return()

function Return () {
  try {
    const scenePrev = document.querySelector('#scenePrev')
    const returnBtn = document.querySelector('#returnBtn')
    returnBtn.setAttribute('hx-get', scenePrev.innerHTML)
    htmx.process(returnBtn)
  } catch (err) {
    console.log(err)
  }
}
