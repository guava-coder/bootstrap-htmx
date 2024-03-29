/**
 * Creates a UnitTest object with the specified name.
 *
 * @param {string} n - the name of the UnitTest object
 * @return {Object} an object with assertTrue and assertNotTrue methods
 */
export default function PlayJs(n = 'UnitTest') {
  return {
    assertTrue: (bool = true) => assertTrue(bool, n),
    assertNotTrue: (bool = true) => assertNotTrue(bool, n)
  }
}

/**
 * Print unit test pass with green color.
 *
 * @param {string} name - the name of unit test 
 * @return {void} 
 */
function printPass(name = '') {
  console.log(`${name} %cpass`, 'color:green')
}

/**
 * Print unit test failed with red color.
 *
 * @param {string} name - the name of unit test 
 * @return {undefined}
 */
function printFailed(name = '') {
  console.log(`${name} %cfailed`, 'color:red')
}

/**
 * Check if the given boolean value is true and print the result.
 *
 * @param {boolean} bool - the boolean value to be checked (default is true)
 * @param {string} name - the name of the unit test (default is 'unitTest')
 */
function assertTrue(bool = true, name = 'unitTest') {
  if (bool) {
    printPass(name)
  } else {
    printFailed(name)
  }
}

/**
 * Asserts that the given boolean is not true, and prints the result.
 *
 * @param {boolean} bool - the boolean value to be checked
 * @param {string} name - the name of the unit test
 * @return {void}
 */
function assertNotTrue(bool = true, name = 'unitTest') {
  if (bool) {
    printFailed(name)
  } else {
    printPass(name)
  }
}