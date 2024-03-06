/**
 * @param {string} [input='']
 * @param {string} [confirm='']
 * @return {boolean}
 */
export const isPasswordNotConfirmed = (input = '', confirm = '') => {
  return input !== confirm || input === ''
}

/**
 * Check if the password is invalid.
 *
 * @param {string} psw - The password to be checked
 * @return {boolean} Indicates whether the password is invalid or not
 */
export const isPasswordInvalid = (psw = '') => {
  return !/^(?=.*\d)(?=.*[A-Za-z])([^\s]){8,32}$/.test(psw)
}

/**
 * @param {string} [value='']
 * @return {boolean}
 */
export const isEmailInvalid = (value = '') => {
  return !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value)
}
