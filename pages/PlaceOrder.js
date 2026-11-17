export class PlaceOrder{
    constructor(page){
        this.page=page
    }
    async selectCategoryAndProduct(category,product){
        await this.page.getByRole('link',{name:'product'}).click()
    }
async addToCart(){
await this.page.getByRole('button',{name:'Add to cart'}).click()
await this.page.waitForTimeout(3000)
}

async goToCart(){
await this.page.locator('#cartur').click()
}
async fillOrderDetails(name,country,city,card,month,year){
await this.page.getByRole('button',{name:'Place Order'}).click()
await this.page.locator('#name').fill(name)
await this.page.locator('#country').fill(country)
await this.page.locator('#city').fill(city)
await this.page.locator('#card').fill(card)
await this.page.locator('#month').fill(month)
await this.page.locator('#year').fill(year)
}

async purchase(){
    await this.page.getByRole('buton',{name:'Purchase'}).click()
}
}