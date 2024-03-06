import {isEmailInvalid} from '../../widget/form/email.js'
import playjs from '../../dependencies/playjs/playjs.js'

((u = playjs()) => {
  u.assertNotTrue(isEmailInvalid('erisafEA1@mail.com'))
})(playjs('testIsEmailValid'));