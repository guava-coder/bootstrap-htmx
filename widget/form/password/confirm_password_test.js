import { isPasswordNotConfirmed } from './confirm_password.js'
import playjs from '../../../dependencies/playjs/playjs.js'

function testIsPasswordConfirm(u = playjs()) {
  u.assertNotTrue(isPasswordNotConfirmed('erisafEA1', 'erisafEA1'))
}

testIsPasswordConfirm(playjs('testIsPasswordConfirm'))