import { test, expect } from "@playwright/test";

const {
  data,
  dataDonationReport,
  dataLoginEN,
} = require("/Users/evyens/ENS/playwright-nodejs-starter-main/tests/ENpageObject.js");

const faker = require("faker");
const f_firstName = faker.name.firstName();
const f_lastName = faker.name.lastName();
const emailCreat =
  `p2p_${f_firstName}.${f_lastName}_dogRun@engagingnetworks.online`.toLowerCase();
const phoneNumber = faker.phone.phoneNumber();
const streetAddress = faker.address.streetAddress();
const f_city = faker.address.city();
const state = faker.address.state();
const zipCode = faker.address.zipCode();
const f_country = faker.address.country();
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];

test("Donate for Dog Run Page", async ({ page }) => {
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
  await page.getByLabel("Email Address").fill(emailCreat);
  console.log("Email: ", emailCreat);
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

  await dataLoginEN(page);

  await page.getByRole("link", { name: "P2P (beta) ❯" }).click();
  await page.getByRole("link", { name: "Sites" }).click();
  await page.getByPlaceholder("Search for a site name or ID").click();
  await page
    .getByPlaceholder("Search for a site name or ID")
    .fill("Unite For Animals");
  await page.getByText("Unite For Animals P2P IATS").click();
  await page
    .locator("li")
    .filter({ hasText: "Unite For Animals P2P IATS" })
    .getByRole("link")
    .click();

  const locator = page.getByText("Reports").nth(3);

  //await locator.hover();
  await locator.click();
  await page
    .locator("li")
    .filter({ hasText: "Donation Report Download CSV" })
    .getByRole("button")
    .click();

  await page.getByLabel("Start Date").fill(formattedDate);
  await page.getByLabel("End Date").fill(formattedDate);

  await dataDonationReport(page, f_firstName, f_lastName, emailCreat);
});
