import * as password from '../../../widget/form/password/password.js'
import playjs from '../../../dependencies/playjs/playjs.js'

function testIsPasswordValid(u = playjs()) {
  u.assertNotTrue(password.isPasswordInvalid('erisafEA1'))
}

testIsPasswordValid(playjs('testIsPasswordValid'))