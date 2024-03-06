import * as email from '../../widget/form/email.js'
import playjs from '../../dependencies/playjs/playjs.js'

((u = playjs()) => {
  u.assertNotTrue(email.isEmailInvalid('erisafEA1@mail.com'))
})(playjs('testIsEmailValid'))