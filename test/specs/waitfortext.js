const assert=require("assert");
describe("COmponent test", ()=> {

    it("Wait for Text", async ()=> { 
         await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
         await browser.maximizeWindow();
         await browser.pause(3000);

         const startbutton=await $("//button[normalize-space()='Start']");
         startbutton.click();
         await browser.pause(3000);

         const text=await $("//h4[normalize-space()='Hello World!']");
         
         await text.waitForDisplayed();

         assert.equal(await text.isDisplayed(),true);
         await browser.pause(3000);

           
    })
})