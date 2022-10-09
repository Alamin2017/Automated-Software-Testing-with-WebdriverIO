describe("Elements Test", ()=> {

    it("Verify URL and Title", async ()=> { 
         await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         await browser.maximizeWindow();
         await browser.pause(3000);
         const iconall = await $$("//*[@id='app']/div[1]/div/div[1]/div/div");
         console.log("Length of Icon:",iconall.length);
         

    })


})