import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.engagingnetworks.app/p2p/site/XZSwz/unite_for_animals_p2p#/');
  await page.getByRole('link', { name: 'Registration' }).click();
  await page.getByText('Adopt A ShrimpAdopt a shrimp').click();
  await page.getByRole('button', { name: 'Next Step: Enter your' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('efsef');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('sdfsf');
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('fes@gmail.com');
  await page.locator('div').filter({ hasText: /^Address 1$/ }).locator('div').click();
  await page.getByLabel('Address 1').fill('1');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('street');
  await page.locator('div').filter({ hasText: /^Region$/ }).locator('div').click();
  await page.getByLabel('Region').fill('va');
  await page.getByLabel('Postcode').click();
  await page.getByLabel('Postcode').fill('22102');
  await page.getByLabel('Country').click();
  await page.getByLabel('Country').fill('US');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Lone rangerFundraise on your').click();
  await page.getByRole('button', { name: 'Next Step: Set your goal' }).click();
  await page.locator('label').filter({ hasText: '50' }).click();
  
  await page.getByRole('button', { name: 'Next Step' }).click();

 
  
});

test('Other fixtures', async({browserName, browser, context, page })=>{


  const pag1 = await context.newPage();
  console.log('Text content: ', await pag1.title());
  
})