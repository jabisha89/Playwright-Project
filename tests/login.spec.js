import{test,expect} from '@playwright/test'
test('Verify login with valid credentials',async({page})=>{
await page.goto('https://www.demoblaze.com/')
await page.locator('//a[@data-target="#logInModal"]').click()
await page.locator('//input[@id="loginusername"]').fill('jabishajabi')
await page.locator('#loginpassword').fill('jabi@1245')
await page.locator('//button[@onclick="logIn()"]').click()
await expect(page.locator('#nameofuser')).toBeVisible()
})

