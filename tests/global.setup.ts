import { test as setup, expect } from '@playwright/test'; 
import { STORAGE_STATE } from '/Users/evyens/ENS/playwright-nodejs-starter-main/playwright.config.ts'; 
const { it } = require('playwright');
const fixture = require('./fixtures');
const { getTestData } = require('./data');
const faker = require('faker');

import { chromium, type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  //const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
 // await page.goto(baseURL!);
  await page.getByLabel('User Name').fill('user');
  await page.getByLabel('Password').fill('password');
  await page.getByText('Sign in').click();
 // await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;



// global.setup.ts
//import { setConfig } from '@playwright/test';

it.use({ fixture });
// setConfig({
//   // Other configuration options...
//   testDir: './tests',
//   timeout: 30000,
//   globalSetup: require.resolve('./global.setup.ts'),
//   // Define your environment variables here
//   env: {
//     baseURL: 'https://test.engagingnetworks.app/p2p/site/XZSwz/unite_for_animals_p2p#/';  
//   },
// });

setup.use({});

setup('global setup', async ({ page }) => {  
  /** Navigate to the site page */ 

  /** Generate Personal Data */
//   const testData = getTestData();
//   const { firstName, lastName, emailShrimp, emailDress4Pet, email4U, emailDogRun,phone, 
//     address, city, region, zipCode, country  } = testData;

process.env.firstName = faker.name.firstName();
process.env.lastName = faker.name.lastName();
process.env.emailShrimp = `p2p_${process.env.firstName}.${process.env.lastName}_shrimp@engagingnetworks.online`.toLowerCase();
process.env.emailDress4Pet = `p2p_${process.env.firstName}.${process.env.lastName}_dress4pet@engagingnetworks.online`.toLowerCase();
process.env.email4U = `p2p_${process.env.firstName}.${process.env.lastName}_4u@engagingnetworks.online`.toLowerCase();
process.env.emailDogRun = `p2p_${process.env.firstName}.${process.env.lastName}_dogRun@engagingnetworks.online`.toLowerCase();
process.env.phone = faker.address.phone();
process.env.address = faker.address.streetAddress();
process.env.city = faker.address.city();
process.env.region = faker.address.region();
process.env.postcode = faker.address.zipCode();
process.env.country = faker.address.country();


  /** Fill in the registrant credentials */ 
//   await page.getByRole('link', { name: 'Registration' }).click();
//   await page.getByText('Adopt A ShrimpAdopt a shrimp').click();
//   await page.getByRole('button', { name: 'Next Step: Enter your' }).click();
//   await page.getByLabel('First Name').fill(process.env.firstName); 
//   await page.getByLabel('Last Name').fill(process.env.lastName); 
//   await page.getByLabel('Email Address').fill(process.env.emailShrimp); 
//   await page.getByLabel('Would you like to hear more').check();
//   await page.getByLabel('Phone Number').fill(process.env.phone); 
//   await page.getByLabel('Address 1').fill(process.env.address); 
//   await page.getByLabel('City').fill(process.env.city); 
//   await page.getByLabel('Region').fill(process.env.region); 
//   await page.getByLabel('Postcode').fill(process.env.postcode); 
//   await page.getByLabel('Country').fill(process.env.country); 

//   await page.getByLabel('User Name').fill('your-username');  
//   await page.getByLabel('Password').fill('your-password');  
//   // Click the sign-in button
//   await page.getByText('Sign in').click();  
//   // Wait for a specific element that indicates a successful login
//   await expect(page.getByText('Welcome, user!')).toBeVisible();  
 
});
