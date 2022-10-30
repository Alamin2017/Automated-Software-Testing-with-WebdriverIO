const page=require('../../pages/ExamplePage');
describe("UK product website:->",()=>{
    it("End to End Test for Product",async()=>{
        
        await browser.url("http://teststore.automationtesting.co.uk/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await page.product_one.click()
        await browser.pause(2000)
        await page.product_size.selectByVisibleText("XL")
        await browser.pause(2000)
        await page.quantity_increase.click()
        await browser.pause(2000)
        await page.add_to_cart_button.click()
        await browser.pause(2000)
        await page.proceed_to_checkout_button.click()
        await browser.pause(2000)
        expect(await page.Title.getText()).toEqual("SHOPPING CART")
        await browser.pause(2000)
        await page.promo_code.click()
        await browser.pause(2000)
        await page.promo_text_box.setValue("20OFF")
        await browser.pause(2000)
        await page.promo_add_button.click()
        await browser.pause(2000)
        await page.proceed_to_checkout_button.click()
        await browser.pause(2000)
        await page.Mr_checkbox.click()
        await browser.pause(2000)
        await page.first_name.setValue("John")
        await browser.pause(2000)
        await page.last_name.setValue("smith")
        await browser.pause(2000)
        await page.email.setValue("johnsmith@gmail.com")
        await browser.pause(2000)
        await page.terms_conditions.click()
        await browser.pause(2000)
        await page.continue_button1.click()
        await browser.pause(2000)









    })

})