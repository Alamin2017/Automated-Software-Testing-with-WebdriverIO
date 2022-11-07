class ElememtUtil{

    async doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    async doSetValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    // async doGetText(element){
    //     element.waitForDisplayed()
    //     return element.getText()
    // }

    // async doIsDisplayed(element){
    //     element.waitForDisplayed()
    //     return element.isDisplayed()
    // }

    // async doGetPageTitle(){
    //     return browser.getTitle()
    // }



}

module.exports = new ElememtUtil()