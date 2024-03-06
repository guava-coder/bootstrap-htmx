import * as password from './password.js'
import playjs from '../../../dependencies/playjs/playjs.js'

function testIsPasswordValid(u = playjs()) {
  u.assertNotTrue(password.isPasswordInvalid('erisafEA1'))
}

testIsPasswordValid(playjs('testIsPasswordValid'))