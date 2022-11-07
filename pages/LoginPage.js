const elementUtil = require('../util/elementUtil');

class LoginPage {
    //page locators:
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginBtn() { return $('//i18n-string[normalize-space()="Log in"]') }

    async do_set_value(emailID, pwd) {
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doSetValue(this.password, pwd)
        
    }
    async login_button_action()
    {
        elementUtil.doClick(this.loginBtn)
        browser.pause(5000)
    }
}
module.exports = new LoginPage()