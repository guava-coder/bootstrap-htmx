import playjs from '../../dependencies/playjs/playjs.js'
import * as validation from './validation.js'

function testIsPasswordValid(u = playjs()) {
  u.assertNotTrue(validation.isPasswordInvalid('erisafEA1'))
}

function testIsEmailValid(u = playjs()) {
  u.assertNotTrue(validation.isEmailInvalid('erisafEA1@mail.com'))
}
function testIsPasswordConfirm(u = playjs()) {
  u.assertNotTrue(validation.isPasswordNotConfirmed('erisafEA1', 'erisafEA1'))
}

testIsPasswordValid(playjs('testIsPasswordValid'))
testIsEmailValid(playjs('testIsEmailValid'))
testIsPasswordConfirm(playjs('testIsPasswordConfirm'))
