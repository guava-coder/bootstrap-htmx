import * as FormRenderer from './form_renderer.js'
import playjs from '../../dependencies/playjs/playjs.js'

const form = document.querySelector('#testForm')
function testGetForm (u = playjs()) {
  const data = { Name: 'name', Email: 'email'}
  form.innerHTML = FormRenderer.getForm(data)
  form.innerHTML += /* html */`
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-block mb-4" id="submit">submit</button>
    </div>`
  u.assertNotTrue(document.querySelector('#Name') === null && document.querySelector('#Email') === null)
}

testGetForm(playjs('testGetForm'))
