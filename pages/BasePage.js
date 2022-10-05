module.exports=new class BasePage{

    async navigateURL()
    {
        await browser.url("https://www.amazon.in/");
        browser.maximizeWindow();
    }
}