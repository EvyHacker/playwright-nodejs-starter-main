import { test, expect } from "@playwright/test";

const {
  data,
  dataReg,
  dataLoginEN,
  dataRegValIndividualEN,
  dataRegValNewJoinTeamEN,
} = require("/Users/evyens/ENS/playwright-nodejs-starter-main/tests/ENpageObject.js");

const faker = require("faker");
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];

const phoneNumber = faker.phone.phoneNumber();
const streetAddress = faker.address.streetAddress();
const f_city = faker.address.city();
const state = faker.address.state();
const zipCode = faker.address.zipCode();
const f_country = faker.address.country();

test.describe("Start", () => {
  const f_firstName = faker.name.firstName();
  const f_lastName = faker.name.lastName();
  const emailPet =
    `p2p_${f_firstName}.${f_lastName}_Pet@engagingnetworks.online`.toLowerCase();
  const emailPetNewTeam =
    `p2p_${f_firstName}.${f_lastName}_PetNewTeam@engagingnetworks.online`.toLowerCase();
  const emailPetJoin =
    `p2p_${f_firstName}.${f_lastName}_PetJoin@engagingnetworks.online`.toLowerCase();
  const newTeam = "Pet " + f_firstName + " " + formattedDate;

  test("Registration Adopt a Pet Individual", async ({ page }) => {
    test.slow();
    await page.goto(
      "https://test.engagingnetworks.app/p2p/site/wzS91/unite_for_animals_p2p_iats#/"
    );
    await page.getByRole("link", { name: "Registration" }).click();
    await page.getByText("Dress Up Your Pet Day").click();
    await page.getByRole("button", { name: "Next Step: Enter your" }).click();
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

    await page.getByLabel("Email Address").fill(emailPet);
    console.log("Email: ", emailPet);

    await page.getByRole("button", { name: "Next" }).click();
    await page.getByText("Lone rangerFundraise on your").click();
    await page
      .getByRole("button", { name: "Next Step: Set your goal" })
      .click();
    await page.locator("label").filter({ hasText: "50" }).click();

    await page.waitForTimeout(4000);
    await page
      .getByRole("button", { name: "Next Step" })
      .click({ timeout: 5000 });

    await page.waitForLoadState("load");
    await page.waitForTimeout(6000);
    await expect(page.url()).toContain(
      "https://test.engagingnetworks.app/page/16018/donate/1?siteId=wzS91"
    );

    await page.waitForTimeout(2000);
    //await dataReg(page, expect, f_firstName, f_lastName,phoneNumber, streetAddress, f_city, state, zipCode, f_country);

    await page
      .frameLocator('iframe[title="Secure card number input frame"]')
      .getByLabel("Card Number Input")
      .fill("4222222222222220");
    await page
      .frameLocator('iframe[name="vgs-collect-cvv-field"]')
      .getByLabel("Card Security Code")
      .fill("123");

    await page.locator("div:nth-child(5) > .en__field__element").click();

    await page.getByText("Anonymous Donor Please do not").click();
    await page.getByLabel("Leave  a personal message").click();
    await page.getByRole("button", { name: "Pay via Card" }).click();

    await page.waitForLoadState("load");
    await page.waitForTimeout(6000);
    await expect(page.url()).toContain(
      "https://test.engagingnetworks.app/p2p/site/wzS91/-#/registration/success"
    );
  });

  test("Registration Adopt a Pet NewTeam No Donations", async ({ page }) => {
    test.slow();
    await page.goto(
      "https://test.engagingnetworks.app/p2p/site/wzS91/unite_for_animals_p2p_iats#/"
    );
    await page.getByRole("link", { name: "Registration" }).click();
    await page.getByText("Dress Up Your Pet Day").click();
    await page.getByRole("button", { name: "Next Step: Enter your" }).click();
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

    await page.getByLabel("Email Address").fill(emailPetNewTeam);
    console.log("Email: ", emailPetNewTeam);

    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("img", { name: "Create new team" }).click();
    await page.getByRole("textbox", { name: "Team Name" }).click();
    await page.getByRole("textbox", { name: "Team Name" }).fill(newTeam);
    await page.getByRole("button", { name: "Create" }).click();
    await page.locator("div").filter({ hasText: /^\$$/ }).click();
    await page.getByLabel("Team Fundraising Goal").fill("10000");
    await page
      .getByRole("button", { name: "Next Step: Set your goal" })
      .click();

    // Check if the URL has changed after the action
    if (
      page.url() !==
      "https://test.engagingnetworks.app/p2p/site/wzS91/unite_for_animals_p2p_iats#/registration/goal"
    ) {
      // If the URL has changed, perform some actions
      console.log("A team by that name already");
      await page
        .getByRole("textbox", { name: "Team Name" })
        .fill(f_firstName + newTeam);
      // Additional actions can be placed here
    } else {
      // If the URL has not changed, perform alternative actions
      console.log("URL has not changed. Taking alternative actions...");
      // Alternative actions can be placed here
    }
    await page
      .getByRole("button", { name: "No donation at this time" })
      .click();
    await page.waitForTimeout(4000);
    await page
      .getByRole("button", { name: "Next Step" })
      .click({ timeout: 5000 });
    //await page.getByRole('button', { name: 'Next Step: Set your goal' }).click();

    await page.waitForLoadState("load");
    await page.waitForTimeout(6000);
    await expect(page.url()).toContain(
      "https://test.engagingnetworks.app/page/16018/donate/1?siteId=wzS91"
    );

    await page.waitForTimeout(2000);
    //await dataReg(page, expect, f_firstName, f_lastName,phoneNumber, streetAddress, f_city, state, zipCode, f_country);

    await page
      .frameLocator('iframe[title="Secure card number input frame"]')
      .getByLabel("Card Number Input")
      .fill("4222222222222220");
    await page
      .frameLocator('iframe[name="vgs-collect-cvv-field"]')
      .getByLabel("Card Security Code")
      .fill("123");

    await page.locator("div:nth-child(5) > .en__field__element").click();

    await page.getByText("Anonymous Donor Please do not").click();
    await page.getByLabel("Leave  a personal message").click();
    await page.getByRole("button", { name: "Pay via Card" }).click();

    await page.waitForLoadState("load");
    await page.waitForTimeout(6000);
    await expect(page.url()).toContain(
      "https://test.engagingnetworks.app/p2p/site/wzS91/-#/registration/success"
    );
  });

  test("Registration Adopt a Pet Join the Team No Donations", async ({ page }) => {
    test.slow();
    await page.goto(
      "https://test.engagingnetworks.app/p2p/site/wzS91/unite_for_animals_p2p_iats#/"
    );
    await page.getByRole("link", { name: "Registration" }).click();
    await page.getByText("Dress Up Your Pet Day").click();
    await page.getByRole("button", { name: "Next Step: Enter your" }).click();
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

    await page.getByLabel("Email Address").fill(emailPetJoin);
    console.log("Email: ", emailPetJoin);

    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("img", { name: "Join existing team" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^Search$/ })
      .locator("div")
      .nth(1)
      .click();
    await page.getByPlaceholder("Search for name, team").click();
    await page
      .getByPlaceholder("Search for name, team")
      .fill("Pet Otho 2024-03-06");
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByRole("button", { name: "Join Team" }).click();
    await page
      .getByRole("button", { name: "No donation at this time" })
      .click();

    await page.waitForTimeout(4000);
    await page
      .getByRole("button", { name: "Next Step" })
      .click({ timeout: 5000 });

    await page.waitForLoadState("load");
    await page.waitForTimeout(2000);
    await expect(page.url()).toContain(
      "https://test.engagingnetworks.app/page/16018/donate/1?siteId=wzS91"
    );

    await page.waitForTimeout(2000);
    //await dataReg(page, expect, f_firstName, f_lastName,phoneNumber, streetAddress, f_city, state, zipCode, f_country);

    await page
      .frameLocator('iframe[title="Secure card number input frame"]')
      .getByLabel("Card Number Input")
      .fill("4222222222222220");
    await page
      .frameLocator('iframe[name="vgs-collect-cvv-field"]')
      .getByLabel("Card Security Code")
      .fill("123");

    await page.locator("div:nth-child(5) > .en__field__element").click();

    await page.getByText("Anonymous Donor Please do not").click();
    await page.getByLabel("Leave  a personal message").click();
    await page.getByRole("button", { name: "Pay via Card" }).click();

    await page.waitForLoadState("load");
    await page.waitForTimeout(4000);
    await expect(page.url()).toContain(
      "https://test.engagingnetworks.app/p2p/site/wzS91/-#/registration/success"
    );
  });

  test("Validation of Registration Pet Individual", async ({ page }) => {
    test.slow();

    await dataLoginEN(page);

    await page.getByPlaceholder("Search", { exact: true }).fill(emailPet);
    await page.getByPlaceholder("Search", { exact: true }).press("Enter");
    await page.locator(".actions > a").first().click();

    await dataRegValIndividualEN(
      page,
      emailPet,
      "QCB",
      "PFRP",
      "PPAY",
      "49.99",
      "PACS",
      "50.00"
    );

    await page.locator("#gadget81").getByText("pacs").click();

    await page.getByRole("button", { name: "CLOSE" }).click();
    await page.getByRole("link", { name: "close" }).click();
    await page
      .locator("form")
      .filter({ hasText: "Search Go or Advanced Search" })
      .locator("a")
      .first()
      .click();
  });

  test("Validation of Registration Pet NewTeam", async ({ page }) => {
    test.slow();
    await dataLoginEN(page);

    await page
      .getByPlaceholder("Search", { exact: true })
      .fill(emailPetNewTeam);
    await page.getByPlaceholder("Search", { exact: true }).press("Enter");
    await page.locator(".actions > a").first().click();

    await dataRegValNewJoinTeamEN(
      page,
      emailPetNewTeam,
      "QCB",
      "PPAY",
      "25.00",
      "PFRP"
    );

    await page.getByRole("button", { name: "CLOSE" }).click();
    await page.getByRole("link", { name: "close" }).click();
    await page
      .locator("form")
      .filter({ hasText: "Search Go or Advanced Search" })
      .locator("a")
      .first()
      .click();
  });

  test("Validation of Registration Pet Join a Team", async ({ page }) => {
    test.slow();
    await dataLoginEN(page);

    await page.getByPlaceholder("Search", { exact: true }).fill(emailPetJoin);
    await page.getByPlaceholder("Search", { exact: true }).press("Enter");
    await page.locator(".actions > a").first().click();

    await dataRegValNewJoinTeamEN(
      page,
      emailPetJoin,
      "QCB",
      "PPAY",
      "25.00",
      "PFRP"
    );

    await page.getByRole("button", { name: "CLOSE" }).click();
    await page.getByRole("link", { name: "close" }).click();
    await page
      .locator("form")
      .filter({ hasText: "Search Go or Advanced Search" })
      .locator("a")
      .first()
      .click();
  });
});
