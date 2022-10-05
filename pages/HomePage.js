module.exports=new class HomePage{

    async searchforGivenKeyword(search_item)
    {
        await $("//input[@id='twotabsearchtextbox']").setValue(search_item)
        await browser.pause(3000);
        await $("//input[@id='nav-search-submit-button']").click();
        await browser.pause(3000);
    }
}