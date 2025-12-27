import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async validateProduct(name: string, price: string) {
    await expect(this.page.locator('.inventory_item_name')).toHaveText(name);
    await expect(this.page.locator('.inventory_item_price')).toHaveText(price);
  }

  async checkout() {
    await this.page.click('#checkout');
  }
}
