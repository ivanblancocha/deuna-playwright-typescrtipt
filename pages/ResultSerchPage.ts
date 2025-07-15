import { Locator, Page } from "@playwright/test"


export class ResultSerchPage{
    page:Page;
    produtsList:Locator;

    constructor(page:Page){
        this.page = page;
        this.produtsList = this.page.locator('a.product-item-link');
    }


    async goToProduct(productName:string){
        await this.page.waitForTimeout(10000);
        let count = await this.produtsList.count();
        let index = 0;
        let flag=true;
        while (index < count && flag) {
            const element = await this.produtsList.nth(index);     
            if(productName === await element.innerText()){
                await this.page.waitForTimeout(5000);
                await element.scrollIntoViewIfNeeded();
                await element.focus();
                await element.click();
                flag = false;
            }
            else{
                index++;
            }


        }

        await this.page.waitForTimeout(5000);
    }
}