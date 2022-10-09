describe("Smoke Test", ()=> {

    it("Verify URL and Title", async ()=> { 
         await browser.url("https://www.google.com/");
         await browser.maximizeWindow();
         await browser.pause(3000);
         const search=await $("//input[@aria-label='সার্চ করুন']");
         search.setValue("mukesh otwa");
         await browser.pause(3000);
         const allvalues=await $$("//ul[@role='listbox']//ul[@role='listbox']/li");

         for(let i=0;i<allvalues.length;i++)
         {
            console.log("Values from Google is:",await allvalues[i].getText());
            await browser.pause(1000);
         }
         await browser.pause(1000);
         await browser.saveScreenshot("screen/alamin.png");
         
        

         
    })
})