import { test, expect } from "@playwright/test";

const {
  data,
  dataEnP2P
} = require("/Users/evyens/ENS/playwright-nodejs-starter-main/tests/ENpageObject.js");

const faker = require("faker");

const phoneNumber = faker.phone.phoneNumber();
const streetAddress = faker.address.streetAddress();
const f_city = faker.address.city();
const state = faker.address.state();
const zipCode = faker.address.zipCode();
const f_country = faker.address.country();
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];

test("Donate for Dog Run Page", async ({ page }) => {
    const f_firstName = faker.name.firstName();
const f_lastName = faker.name.lastName();
const emailCreateDog =
  `p2p_${f_firstName}.${f_lastName}_dogRun@engagingnetworks.online`.toLowerCase();

  test.slow();
  await page.goto(
    "https://test.engagingnetworks.app/p2p/site/wzS91/page/17SRg/dogrun-irving-2024-03-14#/"
  );
  await page.getByRole("heading", { name: "DogRun Irving 2024-03-" }).click();
  const raised = await page.locator(':text("raised")');
  const raisedAmount = await raised.textContent();
  console.log("raisedAmount: ", raisedAmount);
  //const numbers = raised.match(/\d+/g).map(Number);
  await page.getByRole("link", { name: "Donate now" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/1?siteId=wzS91"
  );

  await data(
    page,
    f_firstName,
    f_lastName,
    phoneNumber,
    streetAddress,
    f_city,
    state,
    zipCode,
    f_country
  );
  await page.getByLabel("Email Address").fill(emailCreateDog);
  console.log("Email: ", emailCreateDog);
  await page.getByLabel("$55").check();
  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > .en__field__element"
    )
    .click();
  await page
    .frameLocator('iframe[title="Secure card number input frame"]')
    .getByLabel("Card Number Input")
    .fill("4222222222222220");
  await page
    .frameLocator('iframe[name="vgs-collect-cvv-field"]')
    .getByLabel("Card Security Code")
    .fill("123");
  // Wait for 3 seconds
  //await page.waitForTimeout(8000);
  await page.getByRole("button", { name: "Pay via Card" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(8000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/2"
  );

  await page.getByRole("link", { name: "Head back to DogRun Irving" }).click();
});

test("Donate for Shrimp Team", async ({ page }) => {
    const f_firstName = faker.name.firstName();
    const f_lastName = faker.name.lastName();
    const emailCreateShrimp =
      `p2p_${f_firstName}.${f_lastName}_dogRun@engagingnetworks.online`.toLowerCase();
    test.slow();
  await page.goto(
    "https://test.engagingnetworks.app/p2p/site/wzS91/page/J7SWn/shrimpy-2024-03-05#/"
  );
  await page.getByRole("heading", { name: "Shrimpy 2024-03-05" }).click();
  const raised = await page.locator(':text("raised")');
  const raisedAmount = await raised.textContent();
  console.log("raisedAmount: ", raisedAmount);
  //const numbers = raised.match(/\d+/g).map(Number);
  await page.getByRole("link", { name: "Donate now" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/1?siteId=wzS91"
  );

  await data(
    page,
    f_firstName,
    f_lastName,
    phoneNumber,
    streetAddress,
    f_city,
    state,
    zipCode,
    f_country
  );
  await page.getByLabel("Email Address").fill(emailCreateShrimp);
  console.log("Email: ", emailCreateShrimp);
  await page.getByLabel("$55").check();
  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > .en__field__element"
    )
    .click();
  await page
    .frameLocator('iframe[title="Secure card number input frame"]')
    .getByLabel("Card Number Input")
    .fill("4222222222222220");
  await page
    .frameLocator('iframe[name="vgs-collect-cvv-field"]')
    .getByLabel("Card Security Code")
    .fill("123");
  await page.getByRole("button", { name: "Pay via Card" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/2"
  );

  await page
    .getByRole("link", { name: "Head back to Shrimpy 2024-03-05" })
    .click();
});

test("Donate for Pet Team", async ({ page }) => {
    const f_firstName = faker.name.firstName();
    const f_lastName = faker.name.lastName();
    const emailCreatePet =
      `p2p_${f_firstName}.${f_lastName}_dogRun@engagingnetworks.online`.toLowerCase();
    test.slow();
  await page.goto(
    "https://test.engagingnetworks.app/p2p/site/wzS91/page/ZZS6J/pet-otho-2024-03-06#/"
  );
  await page.getByRole("heading", { name: "Pet Otho 2024-03-06" }).click();
  const raised = await page.locator(':text("raised")');
  const raisedAmount = await raised.textContent();
  console.log("raisedAmount: ", raisedAmount);
  //const numbers = raised.match(/\d+/g).map(Number);
  await page.getByRole("link", { name: "Donate now" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/1?siteId=wzS91"
  );

  await data(
    page,
    f_firstName,
    f_lastName,
    phoneNumber,
    streetAddress,
    f_city,
    state,
    zipCode,
    f_country
  );
  await page.getByLabel("Email Address").fill(emailCreatePet);
  console.log("Email: ", emailCreatePet);
  await page.getByLabel("$55").check();
  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > .en__field__element"
    )
    .click();
  await page
    .frameLocator('iframe[title="Secure card number input frame"]')
    .getByLabel("Card Number Input")
    .fill("4222222222222220");
  await page
    .frameLocator('iframe[name="vgs-collect-cvv-field"]')
    .getByLabel("Card Security Code")
    .fill("123");
  // Wait for 3 seconds
  //await page.waitForTimeout(8000);
  await page.getByRole("button", { name: "Pay via Card" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/2"
  );

  await page.getByRole("link", { name: "Head back to Pet Otho" }).click();
});

test("Donate for Creative Team", async ({ page }) => {
    const f_firstName = faker.name.firstName();
    const f_lastName = faker.name.lastName();
    const emailCreate =
      `p2p_${f_firstName}.${f_lastName}_dogRun@engagingnetworks.online`.toLowerCase();
    test.slow();
  await page.goto(
    "https://test.engagingnetworks.app/p2p/site/wzS91/page/G7SMq/create-alfonzo-2024-03-14#/"
  );
  await page
    .getByRole("heading", { name: "Create Alfonzo 2024-03-14" })
    .click();
  const raised = await page.locator(':text("raised")');
  const raisedAmount = await raised.textContent();
  console.log("raisedAmount: ", raisedAmount);
  //const numbers = raised.match(/\d+/g).map(Number);
  await page.getByRole("link", { name: "Donate now" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/1?siteId=wzS91"
  );

  await data(
    page,
    f_firstName,
    f_lastName,
    phoneNumber,
    streetAddress,
    f_city,
    state,
    zipCode,
    f_country
  );
  await page.getByLabel("Email Address").fill(emailCreate);
  console.log("Email: ", emailCreate);
  await page.getByLabel("$55").check();
  await page
    .locator(
      "div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > .en__field__element"
    )
    .click();
  await page
    .frameLocator('iframe[title="Secure card number input frame"]')
    .getByLabel("Card Number Input")
    .fill("4222222222222220");
  await page
    .frameLocator('iframe[name="vgs-collect-cvv-field"]')
    .getByLabel("Card Security Code")
    .fill("123");
  await page.getByRole("button", { name: "Pay via Card" }).click();

  await page.waitForLoadState("load");
  await page.waitForTimeout(4000);
  await expect(page.url()).toContain(
    "https://test.engagingnetworks.app/page/16017/donate/2"
  );

  await page.getByRole("link", { name: "Head back to Create Alfonzo" }).click();
});

test.skip("Donation Validation", async ({ page }) => {
   
  
  await dataEnP2P(page);
  
  const donations = page.getByText("Donations").nth(2);
  await donations.click()

  //await page.getByPlaceholder('Donor Name, Fundraiser Name,').fill(f_firstNameD);

//   await page.getByText('Abigayle Steuber').click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.locator('li').filter({ hasText: 'Abigayle SteuberDogRun Irving' }).getByRole('link').first().click();
//   const page1 = await page1Promise;
//   await page1.locator('.en__p2p__fundraiser__page__banner').click();
//   await page.locator('.ui_listItem__summary > div:nth-child(3)').first().click();
//   await page.locator('.ui_listItem__summary > div:nth-child(5)').first().click();
//   await page.locator('.ui_listItem__summary > div:nth-child(6)').first().click();
//   await page.locator('li').filter({ hasText: 'Abigayle SteuberDogRun Irving' }).locator('span').first().click();
//   await page.locator('div:nth-child(8) > .ui__row').first().click();
//   await page.locator('li').filter({ hasText: 'Abigayle SteuberDogRun Irving' }).getByRole('link').nth(1).click();
//   await page.getByText('p2p_abigayle.steuber_dogrun@').click();
//   await page.getByText('Esmeralda Throughway').click();
//   await page.getByRole('link', { name: 'Transaction' }).click();
//   await page.getByRole('main').getByText('$').click();
//   await page.getByRole('main').getByText('Success').click();
//   await page.getByRole('main').getByText('VISA').click();
//   await page.getByRole('link', { name: 'Credited To' }).click();
//   await page.locator('div').filter({ hasText: /^Credit ToDogRun Irving 2024-03-14$/ }).locator('span').click();
//   await page.getByRole('button', { name: 'Move Donation' }).click();
//   await page.getByRole('heading', { name: 'Move Donation' }).getByRole('img').click();
//   await page.locator('.ui__text--xl > .ui__icon > svg').click();
    
  });
