import { Locator, Page } from '@playwright/test';

export class PaymentPage{

    private readonly page: Page;
    private readonly paymentMethodTitle: Locator;
    private readonly paymentMethodCheck: Locator;
    private readonly placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.paymentMethodTitle = this.page.getByText('Payment Method', { exact: true });
        this.paymentMethodCheck = this.page.getByRole('checkbox', { name: 'My billing and shipping' });
        this.placeOrderButton = this.page.getByRole('button', { name: 'Place Order' });
    }

    async selectPaymentMethod() {
        if(!(await this.paymentMethodCheck.isChecked())) {
            await this.paymentMethodCheck.check();
        }
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

}