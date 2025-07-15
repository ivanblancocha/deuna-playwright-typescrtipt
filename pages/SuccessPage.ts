import {Locator, Page} from '@playwright/test';

export class SuccessPage {
    private readonly page: Page;
    private readonly thankYouMessage: Locator;
    private readonly orderNumber: Locator;
    private readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.thankYouMessage = this.page.getByText('Thank you for your purchase!');
        this.orderNumber = this.page.getByText('Your order # is:');
        this.continueShoppingButton = this.page.getByRole('link', { name: 'Continue Shopping' });
    }
    

    get getOrderNumberText() {
        return this.orderNumber.textContent();
    }

    get getThankYouMessage() {
        return this.thankYouMessage;
    }

    get getContinueShoppingButton() {
        return this.continueShoppingButton;
    };

    async isVisible() {
        return await this.thankYouMessage.isVisible();
    }
}