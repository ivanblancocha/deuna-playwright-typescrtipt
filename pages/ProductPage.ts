import {Page, Locator } from '@playwright/test'

export class ProductPage{
    private readonly page:Page;
    private readonly sizeOptions:Locator;
    private readonly colorOptions:Locator;
    private readonly qunatityInput:Locator;
    private readonly addToCartButton:Locator;
    private readonly shoppingCartButton: Locator;


    constructor(page:Page){
        this.page = page; 
        this.sizeOptions = this.page.getByRole('listbox', { name: 'Size' });
        this.colorOptions = this.page.getByRole('listbox', { name: 'Color' });
        this.qunatityInput = this.page.getByRole('spinbutton', { name: 'Qty' });
        this.addToCartButton = this.page.locator('#product-addtocart-button');
        this.shoppingCartButton = this.page.getByRole('link', { name: 'Shopping Cart' });

    }


    async setSize(size:string){
        await this.sizeOptions.getByRole('option', { name: size, exact: true }).click();
    }

    async setColor(color:string){
        await this.colorOptions.getByRole('option', { name: color }).click();

    }

    async setQuantity(quantity:string){
        await this.qunatityInput.fill(quantity);

    }

    async addProductToCart(size:string, color:string, quantity:string){
        await this.page.waitForTimeout(5000);
        await this.setSize(size);
        await this.setColor(color);
        await this.setQuantity(quantity);
        await this.addToCartButton.click();
    }

    async goToShoppingCart(){
        await this.shoppingCartButton.click();
    }




    

}