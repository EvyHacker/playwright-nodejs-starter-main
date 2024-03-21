import { test, expect } from '@playwright/test';
const faker = require('faker');

test('Donation', async ({ page }) => {
  await page.goto('https://test.engagingnetworks.app/p2p/site/wzS91/unite_for_animals_p2p_iats#/');
  await page.getByRole('link', { name: 'Donate' }).click();
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  await page.getByLabel('First Name').type(firstName); 
  await page.getByLabel('Last Name').type(lastName); 
  const email = `p2p_${firstName}.${lastName}_donation@engagingnetworks.online`.toLowerCase();
  await page.getByLabel('Email Address').fill(email); 
  await page.getByLabel('Would you like to hear more').check();
  await page.getByLabel('Address 1').fill(faker.address.streetAddress()); 
  await page.getByLabel('City').fill(faker.address.city()); 
  await page.getByLabel('Region').fill(faker.address.state()); 
  await page.getByLabel('Postcode').fill(faker.address.zipCode()); 
  await page.getByLabel('Country').fill(faker.address.country()); 
  await page.getByLabel('$55').check();
  await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > .en__field__element').click();
  await page.frameLocator('iframe[title="Secure card number input frame"]').getByLabel('Card Number Input').fill('4222222222222220');
  await page.frameLocator('iframe[name="vgs-collect-cvv-field"]').getByLabel('Card Security Code').fill('123');
  // Wait for 3 seconds
  //await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Pay via Card' }).click();
});