import{test,expect} from '@playwright/test'
test('sign up with testdata',async({page})=>{
    await page.on('dialog',async dialog=>{
        await expect(dialog.message()).toContain('sign up successful')
        await dialog.accept()
    })
await page.goto('https://www.demoblaze.com/')
await page.locator('#signin2').click()
await page.locator('#sign-username').fill('jabishajabi')
await page.locator('#sign-password').fill('jabi@1245')
await page.locator('//button[@onclick="register()"]').click()

})

test.only('sign up with testdata and click close',async({page})=>{
await page.goto('https://www.demoblaze.com/')
await page.locator('#signin2').click()
await page.locator('#sign-username').fill('jabishajabi')
await page.locator('#sign-password').fill('jabi@1245')
await page.locator('#signInModal').getByText('Close').click()
await expect(page.locator('#signInModal')).toBeHidden()
await page.waitForTimeout(1000)
})

