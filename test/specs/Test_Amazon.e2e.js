const basePage=require('../../pages/BasePage')
const homePage=require('../../pages/HomePage')
const searchpage=require('../../pages/SearchResultPage')


describe('Amazon Home Page Test', () => {
    it('Should be able to launch amazon home page', async () => {
        await basePage.navigateURL();
        console.log(await browser.getTitle());
        await browser.pause(3000);
    });
    it('Should be able to Search the Item ',async()=>{
        await homePage.searchforGivenKeyword("Bean Bag");
        await browser.pause(3000);
        
    })
    it('Should be able to click the Item and cart to Item ',async()=>{
      
        await searchpage.productclick_cartbuttonclick();
        await browser.pause(3000);
     
    })

});


