import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  
  await page.goto('https://test.engagingnetworks.app/p2p/site/XZSwz/unite_for_animals_p2p#/');
  await page.getByRole('link', { name: 'Registration' }).click();
  await page.getByText('Adopt A ShrimpAdopt a shrimp').click();
  await page.getByRole('button', { name: 'Next Step: Enter your' }).click();
  await page.locator('div').filter({ hasText: /^First Name$/ }).locator('div').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('me');
  await page.getByLabel('Last Name').press('Tab');
  await page.getByLabel('Email Address').fill('flwefel@gmail.com');
  await page.locator('div').filter({ hasText: /^Address 1$/ }).locator('div').click();
  await page.getByLabel('Address 1').fill('1street');
  await page.locator('div').filter({ hasText: /^City$/ }).locator('div').click();
  await page.getByLabel('City').fill('vienna');
  await page.getByLabel('City').press('Tab');
  await page.getByLabel('Region').fill('VA');
  await page.getByLabel('Region').press('Tab');
  await page.getByLabel('Postcode').fill('22102');
  await page.getByLabel('Postcode').press('Tab');
  await page.getByLabel('Country').fill('USA');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Lone rangerFundraise on your').click();
  await page.getByRole('button', { name: 'Next Step: Set your goal' }).click();
  await page.locator('label').filter({ hasText: /^5$/ }).click();
  await page.getByRole('button', { name: 'Next Step' }).click();

  
  // await page.getByRole('button', { name: 'Next Step' }).click();
  // await page.getByLabel('20').check();
  // await page.getByRole('button', { name: 'Next Step' }).click();
  // await page.getByRole('button', { name: 'Next Step' }).click();
  // await page.getByRole('button', { name: 'No donation at this time' }).click();
  // await page.getByRole('button', { name: 'No donation at this time' }).click();
  // await page.getByRole('button', { name: 'Next Step' }).dblclick();
});