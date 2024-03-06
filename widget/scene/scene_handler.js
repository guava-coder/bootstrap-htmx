const sceneCurrent = document.querySelector('#sceneCurrent')

const view = document.querySelector('div[hx-get]').getAttribute('hx-get')
sceneCurrent.innerHTML = view

const scenePrev = document.querySelector('#scenePrev')
scenePrev.innerHTML = sceneCurrent.innerHTML

document.addEventListener('click', e => {
  const view = e.target.getAttribute('hx-get')
  if (view != null) {
    if (!view.includes('scene') || !view.includes('btn')) {
      scenePrev.innerHTML = sceneCurrent.innerHTML
      sceneCurrent.innerHTML = view
    }
  }
})
