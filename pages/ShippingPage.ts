import { Page,Locator } from '@playwright/test';


export class ShippingPage{
    private readonly page: Page;
    private readonly shippingFormTitle: Locator;
    private readonly emailInput: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly streetAddressInput: Locator;
    private readonly cityInput: Locator;
    private readonly stateSelect: Locator;
    private readonly zipCodeInput: Locator;
    private readonly countrySelect: Locator;
    private readonly phoneNumberInput: Locator;
    private readonly shippingMethodRadio: Locator;
    private readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shippingFormTitle = this.page.getByText('Shipping Address');
        this.emailInput = this.page.getByRole('textbox', { name: 'Email Address * Email Address' });
        this.firstNameInput = this.page.getByRole('textbox', { name: 'First Name *' });
        this.lastNameInput = this.page.getByRole('textbox', { name: 'Last Name *' })
        this.streetAddressInput = this.page.getByRole('textbox', { name: 'Street Address: Line 1' });
        this.cityInput = this.page.getByRole('textbox', { name: 'City *' });
        this.stateSelect = this.page.locator('select[name="region_id"]');
        this.zipCodeInput = this.page.getByRole('textbox', { name: 'Zip/Postal Code *' });
        this.countrySelect = this.page.getByLabel('Country');
        this.phoneNumberInput = this.page.getByRole('textbox', { name: 'Phone Number *' });
        this.shippingMethodRadio = this.page.getByRole('radio', { name: 'Fixed Flat Rate' });
        this.nextButton = this.page.getByRole('button', { name: 'Next' });
    }

    async fillShippingForm(
        email:string, 
        firstName: string, 
        lastName: string, 
        streetAddress: string, 
        city: string, 
        state: string,
        zipCode: string, 
        country: string,
        phoneNumber: string ) {
        await this.emailInput.fill(email);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.streetAddressInput.fill(streetAddress);
        await this.cityInput.fill(city);
        await this.stateSelect.selectOption(state);
        await this.zipCodeInput.fill(zipCode);
        await this.countrySelect.selectOption(country);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.shippingMethodRadio.check();
        
    }

    async proceedToNextStep() {
        await this.nextButton.click();
    }   
}