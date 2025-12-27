import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { CheckoutCompletePage } from '../pages/checkoutComplete.page';

test('Prueba E2E - Checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const completePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const productName = 'Sauce Labs Backpack';
  const product = await inventoryPage.getProductInfo(productName);

  await inventoryPage.addProductToCart(productName);
  await inventoryPage.goToCart();
  await cartPage.validateProduct(product.name, product.price);
  await cartPage.checkout();
  await checkoutPage.fillInformation();
  await checkoutPage.finish();
  await completePage.validateOrder();
});
