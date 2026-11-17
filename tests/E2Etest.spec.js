import{LoginPage } from '../pages/LoginPage'
import{PlaceOrder } from '../pages/PlaceOrder'
import{test,expect}  from   '@playwright/test'

test.only('Select a product and Add to Cart Click "ok" on the popup ',async({page})=>{
    const loginpage=new LoginPage(page)
    const order=new PlaceOrder(page)
    await loginpage.openApplication()
    page.on('dialog',async dialog=>{
   // await expect(dialog.message()).toContain('Product added')
    await dialog.accept()
})
    await loginpage.login('jabishajabi','jabi@1245')
    await page.waitForTimeout(3000)
    await expect(page.locator('#nameofuser')).toBeVisible()
    await order.selectCategoryAndProduct('Laptops','Sony vaio i5')
    await order.addToCart()

})

test('Select a product under phones and Add to Cart Click "ok" on the popup and add details ',async({page})=>{
   const loginpage=new LoginPage(page)
    const order=new PlaceOrder(page)
    await loginpage.openApplication()
    page.on('dialog',async dialog=>{
    await expect(dialog.message()).toContain('Product added')
    await dialog.accept()
})
    await loginpage.login('jabishajabi','jabi@1245')
    await expect(page.locator('#nameofuser')).toBeVisible()
    await order.selectCategoryAndProduct('phones','Sony vaio i5')
    await order.addToCart()
    await order.goToCart()
    await order.fillOrderDetails('jabisha','India','Nemom','123247748','December','2026')
    await order.purchase()
    await expect(order.successMessage).toBeVisible()
    await order.okButton.click()
})