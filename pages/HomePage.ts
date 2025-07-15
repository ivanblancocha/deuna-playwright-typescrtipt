import {Locator, Page} from '@playwright/test'

export class HomePage{
    private readonly page:Page;
    private readonly searchInput:Locator; 
    private readonly searchButton:Locator;


    constructor(page:Page){
        this.page = page;
        this.searchInput = this.page.locator('#search');
        this.searchButton = this.page.getByRole('button', { name: 'Search' });
    }


    async completeSearchInput(productName:string){
        try {
            await this.searchInput.fill(productName);
            
        } catch (error) {
            console.log('Error completing the search input', error);
            throw error;
            
        }

    }

    async clickSearchButton(){
        await this.searchButton.click();
    }


}