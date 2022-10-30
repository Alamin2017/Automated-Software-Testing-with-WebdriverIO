const page=require('../../pages/ExamplePage');
describe("My First test suite",()=>{
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
        await browser.pause(5000)
        await page.proceed_to_checkout_button.click()
        await browser.pause(5000)
        expect(await page.Title.getText()).toEqual("SHOPPING CART")
        await browser.pause(5000)

    })

})