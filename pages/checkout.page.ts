import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation() {
    await this.page.fill('#first-name', 'Maria');
    await this.page.fill('#last-name', 'QA');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }
}
