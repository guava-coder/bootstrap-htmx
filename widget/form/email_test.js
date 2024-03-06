import * as email from './email.js'
import playjs from '../../dependencies/playjs/playjs.js' 

function testIsEmailValid(u = playjs()) {
  u.assertNotTrue(email.isEmailInvalid('erisafEA1@mail.com'))
}

testIsEmailValid(playjs('testIsEmailValid'))