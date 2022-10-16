describe("My First test suite",()=>{
    it("My first wdio test",async()=>{
        let myurl="http://example.com/"
        await browser.url(myurl)
        await browser.maximizeWindow()
        await browser.pause(5000)
        await expect(browser).toHaveTitle("Example Domain")
    })
})