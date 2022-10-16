module.exports=new class SearchResultPage{
    get productPrice()
    {
        return $('//*[@id="corePrice_feature_div"]/div/span/span[2]')
    }
    get addToCartButton()
    {
        return $('/html/body/div[2]/div[2]/div[5]/div[4]/div[1]/div[3]/div/div/div/div/form/div/div/div/div/div[3]/div/div[33]/div[1]/span/span/span/input')
    }
    get product()
    {
        return $("/html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[3]/div/div/div/div/div/div/div[1]/span/a/div/img")
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