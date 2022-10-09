describe("Smoke Test", ()=> {

    it("Verify URL and Title", async ()=> { 
         await browser.url("https://www.facebook.com/");
         await browser.maximizeWindow();
         await browser.pause(3000);
         await expect(browser).toHaveUrlContaining("facebook");
         await expect(browser).toHaveTitle("Facebook – log in or sign up");
    })
    it("Verify Login", async ()=> {

        await $("//input[@id='email']").setValue("alamincse12@gmail.com");
        await browser.pause(3000);
        await $("//input[@id='pass']").setValue("123088");
        await browser.pause(3000);
        const loginbutton=await $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/button[1]")
        loginbutton.click();
        const displayed=await loginbutton.isDisplayed();
        
        console.log("Status of Login Button",displayed);
        await browser.pause(10000);

    })

})