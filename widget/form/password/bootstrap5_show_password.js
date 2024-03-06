/**
 * A function that handles the visibility of a password in a Bootstrap 5 form.
 * It takes a show password button element and an input selector as parameters,
 * and adds an event listener to the button to handle the password visibility.
 *
 * example of show password button:
 * <span><button type="button" id="showPsw"
 * class="btn bi bi-eye-slash-fill"
 * style="font-size: 2rem;"></button></span>
 *
 * @param {showPsw=Element}
 * @param {string} [input='']
 */
export default function Bootstrap5ShowPassword (showPswBtn = Element, inputSelector = '') {
  showPswBtn.addEventListener('click', (e) => handlePasswordVisibility(e.target, inputSelector))
}

/**
 * Toggles the visibility of a password input field based on the provided showPsw element and input selector.
 *
 * @param {Element} showPsw - the element that triggers the password visibility toggle
 * @param {string} input - the selector for the password input
 * @return {void}
 */
function handlePasswordVisibility (showPsw = Element, input = '') {
  const password = document.querySelector(input)
  const classes = showPsw.classList
  const ishow = 'bi-eye-fill'
  const ihide = 'bi-eye-slash-fill'
  const showPassword = () => {
    classes.remove(ihide)
    classes.add(ishow)
    password.type = 'text'
  }
  const hidePassword = () => {
    classes.remove(ishow)
    classes.add(ihide)
    password.type = 'password'
  }

  if (classes.contains(ishow)) {
    hidePassword()
  } else if (classes.contains(ihide)) {
    showPassword()
  }
}
