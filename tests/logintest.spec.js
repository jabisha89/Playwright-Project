import{LoginPage } from '../pages/LoginPage'
import{test,expect}  from   '@playwright/test'

test('verify login with valid credentials',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    await loginpage.login('jabishajabi','jabi@1245')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
})

test('Verify login with invalid username and valid password ',async({page})=>{
const loginpage=new LoginPage(page)
await loginpage.openApplication()
page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('Wrong password')
    await dialog.accept()
})
await loginpage.login('user','jabi@1245')  
await page.waitForTimeout(3000)
})

test('Verify login with valid username and invalid password',async({page})=>{
const loginpage=new LoginPage(page)
await loginpage.openApplication()
page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('Wrong password')
    await dialog.accept()
})
await loginpage.login('jabishajabi','jab1245')  
await page.waitForTimeout(3000)
})

test.only('Verify login with invalid username and invalid password',async({page})=>{
const loginpage=new LoginPage(page)
await loginpage.openApplication()
page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('User does not exist')//
    await dialog.accept()
})
await loginpage.login('jabi','ja1245')  
await page.waitForTimeout(3000)
})
