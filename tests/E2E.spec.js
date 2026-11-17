import{LoginPage } from '../pages/LoginPage'
import{test,expect}  from   '@playwright/test'

test('Select a product and Add to Cart Click "ok" on the popup ',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('Product added')
    await dialog.accept()
})
    await loginpage.login('jabishajabi','jabi@1245')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await page.getByText('Sony vaio i5').click()
    await page.getByText('Add to cart').click()

})

test('Select a product under phones and Add to Cart Click "ok" on the popup and add details ',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('Product added')
    await dialog.accept()
})
    await loginpage.login('jabishajabi','jabi@1245')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await page.getByText('Phones').click()
    await page.getByRole('link',{name:'Sony xperia z5'}).click()
    await page.getByText('Add to cart').click()
    await page.locator('//a[@id="cartur"]').click()
    await page.getByRole('button',{name:'Place Order'}).click()
    await page.locator('//input[@id="name"]').fill('jabisha')
    await page.locator('//input[@id="country"]').fill('India')
    await page.locator('//input[@id="city"]').fill('Nemom')
    await page.locator('//input[@id="card"]').fill('12343ggf')
    await page.locator('//input[@id="month"]').fill('december')
    await page.locator('//input[@id="year"]').fill('2026')
    await page.getByText('Purchase').click()


})

test('Select a product under monitors and Add to Cart Click "ok" on the popup and add details ',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('Product added')
    await dialog.accept()
})
    await loginpage.login('jabishajabi','jabi@1245')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await page.getByText('Monitors').click()
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:'Apple monitor 24'}).click()
    await page.getByText('Add to cart').click()
    await page.locator('//a[@id="cartur"]').click()
    await page.getByRole('button',{name:'Place Order'}).click()
    await page.locator('//input[@id="name"]').fill('jabisha')
    await page.locator('//input[@id="country"]').fill('India')
    await page.locator('//input[@id="city"]').fill('Nemom')
    await page.locator('//input[@id="card"]').fill('12343ggf')
    await page.locator('//input[@id="month"]').fill('december')
    await page.locator('//input[@id="year"]').fill('2026')
    await page.getByText('Purchase').click()


})

test.only('Login with valid credentials and click Logout',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()
    await loginpage.login('jabishajabi','jabi@1245')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await page.waitForTimeout(3000)
    await page.getByText('Log out').click()
    await page.waitForTimeout(3000)
})