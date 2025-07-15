import {Locator, Page} from "@playwright/test";

export class ShoppingCartPage {
    private readonly page: Page;
    private readonly shoppingCartTitle: Locator;
    private readonly productListed: Locator;
    private readonly productPrice: Locator;
    private readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCartTitle = this.page.getByText('Shopping Cart', { exact: true });
        this.productListed = this.page.locator('#shopping-cart-table').getByText('Radiant Tee');
        this.productPrice = this.page.locator('#shopping-cart-table').getByText('$').first();
        this.proceedToCheckoutButton = this.page.getByRole('button', { name: 'Proceed to Checkout' });
    }

    async proceedToCheckout() {
        await this.page.waitForTimeout(5000);
        await this.page.getByRole('insertion').locator('div').first().click()
        await this.proceedToCheckoutButton.click();
    }
}