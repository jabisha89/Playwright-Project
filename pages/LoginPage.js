export class LoginPage{
    constructor(page){
        this.page=page
        this.loginlink=page.locator('#login2')
        this.username=page.locator('#loginusername')
        this.password=page.locator('#loginpassword')
        this.login_button=page.locator('//button[@onclick="logIn()"]')
    }
    async openApplication(){
await this.page.goto('https://www.demoblaze.com/index.html')
    }
    async login(loginusername,loginpassword){
        await this.loginlink.click()
await this.username.fill(loginusername)
await this.password.fill(loginpassword)
await this.login_button.click()
    }
}