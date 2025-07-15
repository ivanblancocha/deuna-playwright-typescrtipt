import { FrameLocator, Locator, Page } from '@playwright/test';

export class AdvertisePage {
    private readonly page: Page;
    private readonly closeButton: Locator;
    private readonly closeButton2: Locator;
    private readonly frame: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.frame = this.page.frameLocator('#aswift_1')
    }

    async closeAdvertise() {

        let frames = this.page.frames();
        for (const frame of frames) {
            try {
                // Check si el frame tiene un "Close ad" button
                const closeAdButton = frame.getByRole('button', { name: 'Close ad' });
                if (await closeAdButton.isVisible({ timeout: 1000 }).catch(() => false)) {
                    await closeAdButton.click({ timeout: 2000 });
                    break; 
        } } catch (e) {
            // Ignore errors para los frames que no tienen el botón
            console.log('No Close ad button found in frame:', frame.url());
        } 
    }   
    }


}