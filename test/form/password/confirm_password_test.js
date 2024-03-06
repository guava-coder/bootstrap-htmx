import { isPasswordNotConfirmed } from '../../../widget/form/password/confirm_password.js'
import playjs from '../../../dependencies/playjs/playjs.js'

((u = playjs())=> {
  u.assertNotTrue(isPasswordNotConfirmed('erisafEA1', 'erisafEA1'))
})(playjs('testIsPasswordConfirm'))