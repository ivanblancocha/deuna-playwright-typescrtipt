import {test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultSerchPage } from '../pages/ResultSerchPage';
import { ProductPage } from '../pages/ProductPage';
import { AdvertisePage } from '../pages/AdverisePage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { ShippingPage } from '../pages/ShippingPage';
import { PaymentPage } from '../pages/PaymentPage';
import { SuccessPage } from '../pages/SuccessPage';
import { faker, fakerEN_US } from '@faker-js/faker';

test.describe('Purchase E2E',async()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://magento.softwaretestingboard.com/');
    });
    
    test('Product successfull purchasing',async({page})=>{
        
        
        //buscar prod 
        //recorrer lista y click en el producto
        //product page - seleccionar el size, el. color y la cant
        //click en add to cart
        //vamo al carrito, y proceed al checkout
        //Completar shipping form
        //Place the order
        // validar el texto de thank you...

        let homePage = new HomePage(page);
        let resultSearchPage = new ResultSerchPage(page);
        let productPage = new ProductPage(page);
        let advertisePage = new AdvertisePage(page);
        let shoppingCartPage = new ShoppingCartPage(page);
        let shippingPage = new ShippingPage(page);
        let paymentPage =  new PaymentPage(page);

        await test.step('Buscar prod', async()=>{
            await homePage.completeSearchInput('Radiant Tee');
            await homePage.clickSearchButton();
        });


        await test.step('Go to the product',async()=>{
            await resultSearchPage.goToProduct('Radiant Tee');

        });

        //Advertise page
        await test.step('Close the adverise', async()=>{
            await advertisePage.closeAdvertise();
        });
        

        //Product page
        await test.step('Set size, color and qnt and add to cart', async()=>{
            await productPage.addProductToCart('S','Blue','1');
            await productPage.goToShoppingCart();
        });

        //Shopping cart page
       await test.step('Validate shopping cart and go to checkout', async()=>{
            await shoppingCartPage.proceedToCheckout();
        });

        // Shipping page
        await test.step('Complete shipping form', async()=>{
            await shippingPage.fillShippingForm(
                faker.internet.email(),
                faker.person.firstName(),
                faker.person.lastName(),
                faker.location.streetAddress(),
                faker.location.city(),
                fakerEN_US.location.state(),
                faker.location.zipCode(),
                'United States',
                faker.phone.number()
            );
            await shippingPage.proceedToNextStep();
        });


        // Payment page
        await test.step('Payment method', async()=>{
            await paymentPage.placeOrder();
        });


        // Success page
        await test.step('Validate order confirmation', async()=>{

            let successPage = new SuccessPage(page);
            const thankYouMessage = await successPage.getThankYouMessage;
            await expect(thankYouMessage).toBeVisible();
        });

        await test.step('Validate order number', async()=>{
            let successPage = new SuccessPage(page);
            const orderNumber = await successPage.getOrderNumberText;
            await expect(orderNumber).toContain('Your order # is:');
        });
    });
});