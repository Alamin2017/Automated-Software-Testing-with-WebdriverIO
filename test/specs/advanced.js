describe('Advanced Testing', () => {
    beforeEach(async() => {
        await browser.url("https://the-internet.herokuapp.com/upload")
        await browser.maximizeWindow()
        await browser.pause(5000)  
    });
    afterEach(async() => {
        await browser.pause(3000)
    });

    it("File Uplaoding 1",async()=>{
        
        const filepath="./my-screenshot.png"
        const remoteFilepath=await browser.uploadFile(filepath)
        await $("#file-upload").setValue(remoteFilepath)
        await browser.pause(3000)
        await $("#file-submit").click()
        
    })
    it("File Uplaoding 2",async()=>{
        
        const filepath="./my-screenshot.png"
        const remoteFilepath=await browser.uploadFile(filepath)
        await $("#file-upload").setValue(remoteFilepath)
        await browser.pause(3000)
        await $("#file-submit").click()
       
    })
    it("File Uplaoding 3",async()=>{
        
        const filepath="./my-screenshot.png"
        const remoteFilepath=await browser.uploadFile(filepath)
        await $("#file-upload").setValue(remoteFilepath)
        await browser.pause(3000)
        await $("#file-submit").click()
       
    })
    it.only("Create and Switch new Window",async()=>{
        
       await browser.url("https://www.google.com/")
       await browser.pause(2000)
       await browser.newWindow("https://webdriver.io/")
       await browser.pause(2000)
       await browser.switchWindow("google.com")
       await browser.pause(5000)
       
    })
});