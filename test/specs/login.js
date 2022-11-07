const loginPage = require('../../pages/LoginPage')

describe('login page feature test', async()=>{
    it('verify login page title', async()=>{
        await browser.url('https://app.hubspot.com/login')
        await browser.maximizeWindow()
        await browser.pause(5000)
        await loginPage.do_set_value('naveenanimation30@gmail.com', 'Test@1234')
        await browser.pause(5000)
        await loginPage.login_button_action()
        await browser.pause(5000)
    })
  
})

