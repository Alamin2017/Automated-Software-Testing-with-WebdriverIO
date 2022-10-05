module.exports=new class SearchResultPage{
    get productPrice()
    {
        return $('//*[@id="corePrice_feature_div"]/div/span/span[2]')
    }
    get addToCartButton()
    {
        return $('//a[@id="a-autoid-4-announce"]')
    }
    get product()
    {
        return $("img[alt='Sponsored Ad - Amazon Brand - Solimo XXL Bean Bag Filled With Beans (Black and Brown)']")
    }
    async productclick_cartbuttonclick()
    {
        let parentwindowID=await browser.getWindowHandle();
        await this.product.click();
        await browser.pause(5000);
        let allwindowhandles=await browser.getWindowHandles();
        await browser.pause(5000);
        for(let i=0;i<allwindowhandles.length;i++){
            if(allwindowhandles[i]!=parentwindowID)
            {
            await browser.switchToWindow(allwindowhandles[i]);
            await browser.maximizeWindow();
            break;      
            }
        }
        let price =await this.productPrice.getText();
        console.log(price);
        await browser.pause(5000);

        await this.addToCartButton.click();
        await browser.pause(5000);
        await browser.closeWindow();

        await browser.switchToWindow(parentwindowID);
        await browser.pause(13000);
    }
}