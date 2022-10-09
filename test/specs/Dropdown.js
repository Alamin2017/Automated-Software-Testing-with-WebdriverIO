describe("Smoke Test", ()=> {

    it("Verify URL and Title", async ()=> { 
         await browser.url("https://www.facebook.com/");
         await browser.maximizeWindow();
         await browser.pause(3000);
         const createaccount=await $("(//a[text()='Create New Account'])");
         createaccount.click();
         await browser.pause(3000);
         const monthDD=await $("#month");
         monthDD.selectByAttribute("value","11");
         await browser.pause(3000);
         const dayDD=await $("#day");
         dayDD.selectByAttribute("value","16");
         await browser.pause(3000);
         const yearDD=await $("#year");
         yearDD.selectByAttribute("value","2011");
         await browser.pause(3000);


         
    })
})