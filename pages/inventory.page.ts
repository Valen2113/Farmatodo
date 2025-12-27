import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async getProductInfo(productName: string) {
    const item = this.page.locator('.inventory_item')
      .filter({ hasText: productName });

    const name = await item.locator('.inventory_item_name').innerText();
    const price = await item.locator('.inventory_item_price').innerText();

    return { name, price };
  }

  async addProductToCart(productName: string) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .locator('button')
      .click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
