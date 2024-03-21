import fs from 'fs';
const assert = require('assert');
const faker = require("faker");

// async function generateNames(f_firstName, f_lastName, phoneNumber, streetAddress, f_city, state, zipCode, f_country) {
//   const f_firstName = faker.name.firstName();
//   const f_lastName = faker.name.lastName();  

// const phoneNumber = faker.phone.phoneNumber();
// const streetAddress = faker.address.streetAddress();
// const f_city = faker.address.city();
// const state = faker.address.state();
// const zipCode = faker.address.zipCode();
// const f_country = faker.address.country();
// }

// async function generateNames(numNames) {
//   const names = [];
//   for (let i = 0; i < numNames; i++) {
//     const firstName = faker.name.firstName();
//     const lastName = faker.name.lastName();
//     const fullName = `${firstName} ${lastName}`;
//     names.push(fullName);
//   }
//   return names;
// }

// async function locators (page) {
//     const FN = await page.getByLabel('First Name')
//     const LN = await page.getByLabel('Last Name')

//     const phone = await page.getByLabel('Phone Number') 
//     const address = await page.getByLabel('Address 1')
//     const city = await page.getByLabel('City')
//     const region = await page.getByLabel('Region')
//     const zip = await page.getByLabel('Postcode')
//     const country = await page.getByLabel('Country')
// }

// async function locators (page, FN, LN, phone, address) {

// beforeEach(async () => {
//     await locators()


// });
//     const FN = await page.getByLabel('First Name')
//     const LN = await page.getByLabel('Last Name')

//     const phone = await page.getByLabel('Phone Number') 
//     const address = await page.getByLabel('Address 1')
//     const city = await page.getByLabel('City')
//     const region = await page.getByLabel('Region')
//     const zip = await page.getByLabel('Postcode')
//     const country = await page.getByLabel('Country')
// }

// utils.js
async function data(page, f_firstName, f_lastName, phoneNumber, streetAddress, f_city, state, zipCode, f_country) {

  await page.getByLabel('First Name').fill(f_firstName);
  await page.getByLabel('Last Name').fill(f_lastName);

  await page.getByLabel('Phone Number').fill(phoneNumber);
  await page.getByLabel('Address 1').fill(streetAddress);
  await page.getByLabel('City').fill(f_city);
  await page.getByLabel('Region').fill(state);
  await page.getByLabel('Postcode').fill(zipCode);
  await page.getByLabel('Country').fill(f_country);


}
async function dataReg(page, expect, f_firstName, f_lastName, phoneNumber, streetAddress, f_city, state, zipCode, f_country) {

  const FN = await page.getByLabel('First Name').textContent()
  expect(FN).toBe(f_firstName);


  await expect(page.getByLabel('First Name')).textContent(f_firstName);
  await expect(page.getByLabel('Last Name')).textContent(f_lastName);

  await expect(page.getByLabel('Phone Number 1')).textContent(phoneNumber);
  await expect(page.getByLabel('Address 1')).textContent(streetAddress);
  await expect(page.getByLabel('City')).textContent(f_city);
  await expect(page.getByLabel('Region')).textContent(state);
  await expect(page.getByLabel('Postcode')).textContent(zipCode);
  await expect(page.getByLabel('Country')).textContent(f_country);
}

async function dataDonation(page, f_firstName, f_lastName, f_middleName) {

  await page.getByLabel('First Name').fill(f_firstName);
  await page.getByLabel('Last Name').fill(f_lastName);
  await page.getByLabel('Middle Name').fill(f_middleName);

}

async function dataDonation2(page, phoneNumber) {

  await page.getByLabel('Success ID').fill('ID');
  await page.getByLabel('Success ID').press('Tab');
  await page.getByLabel('Import Tag').fill('tag');
  await page.getByLabel('Import Tag').press('Tab');
  await page.getByLabel('Phone Number', { exact: true }).fill(phoneNumber);
  await page.getByLabel('Phone Number', { exact: true }).press('Tab');
  await page.getByLabel('Tax Deductible').fill('Y`');
  await page.getByLabel('Tax Deductible').press('Tab');
  await page.getByLabel('Additional Comments').fill('comments');
  await page.getByLabel('Additional Comments').press('Tab');
  await page.getByLabel('Appeal Code').fill('code');
  await page.getByLabel('Appeal Code').press('Tab');
  await page.getByLabel('Other 1').fill('other 1');
  await page.getByLabel('Other 2').click();
  await page.getByLabel('Other 2').fill('other 2');
  await page.getByLabel('Other 2').press('Tab');
  await page.getByLabel('Other 3').fill('other 3');
  await page.getByLabel('Other 3').press('Tab');
  await page.getByLabel('Other 4').fill('other 4');
  await page.getByLabel('Other 4').press('Tab');
  await page.getByLabel('Other 5').fill('other 5');
  await page.getByLabel('Other 5').press('Tab');
  await page.getByLabel('Other 6').fill('other 6');
  await page.getByLabel('Other 6').press('Tab');
  await page.getByLabel('Supporter Birthday').fill('20200101');
  await page.getByLabel('Phone Number 2').click();
  await page.getByLabel('Phone Number 2').fill('15052344554');
  await page.getByLabel('Phone Number 2').press('Tab');
  await page.getByLabel('PayPal Billing Agreement').fill('agreement');
  await page.getByLabel('PayPal Billing Agreement').press('Tab');
  await page.getByLabel('Untagged', { exact: true }).fill('untagged');
  await page.getByLabel('Untagged', { exact: true }).press('Tab');
  await page.getByLabel('Untagged text').fill('text');
  await page.getByLabel('Untagged text').press('Enter');

}

async function dataDonation3(page, streetAddress, f_city, zipCode, f_country) {


  await page.getByLabel('Address 1').fill(streetAddress);
  await page.getByLabel('Address 1').press('Tab');
  await page.getByLabel('Address 2').fill('Union 123Q`');
  await page.getByLabel('Address 2').press('Tab');
  await page.getByLabel('Address 3').fill('3');
  await page.getByLabel('Address 3').press('Tab');
  await page.getByLabel('City').fill(f_city);
  await page.getByLabel('City').press('Tab');
  await page.getByLabel('Postcode').fill(zipCode);
  await page.getByLabel('Postcode').press('Tab');
  await page.getByLabel('Country').selectOption(f_country);


}

async function dataLoginEN(page) {

  await page.goto(
    "https://test.engagingnetworks.app")
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('evy_testaccount01@engagingnetworks.net');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('EasyPass@1241');
  await page.getByLabel('Password:').press('Enter');
}

async function dataRegValIndividualEN(page, email, type_1, type_2, type_3, PPAYamount, type_4, PACSamount) {

  await page.locator('.gadget__actions > span:nth-child(5)').click();
  await page.getByRole('button', { name: 'Download Transaction History' }).click();
  const downloadPromise = await page.waitForEvent('download');

  const download = await downloadPromise;
  const filePath = './data.csv';

  // Save the downloaded file
  await download.saveAs(filePath);
  const csvParser = require('csv-parser');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      //console.log(results);
      //Process the CSV data here
      //assert.strictEqual(results.length, 3, 'Number of rows should be 3');
      const expectedColumns = [
        'Account ID', 'Supporter ID', 'Supporter Email', 'Date Created', 'Date Modified', 'Campaign Number', 'Campaign Type', 'Campaign ID', 'Campaign Date', 'Campaign Time', 'Campaign Status', 'Campaign Data 1', 'Campaign Data 2', 'Campaign Data 3', 'Campaign Data 4', 'Campaign Data 5', 'Campaign Data 6', 'Campaign Data 7', 'Campaign Data 8', 'Campaign Data 9', 'Campaign Data 10', 'Campaign Data 11', 'Campaign Data 12', 'Campaign Data 13', 'Campaign Data 14', 'Campaign Data 15', 'Campaign Data 16', 'Campaign Data 17', 'Campaign Data 18', 'Campaign Data 19', 'Campaign Data 20', 'Campaign Data 21', 'Campaign Data 22', 'Campaign Data 23', 'Campaign Data 24', 'Campaign Data 25', 'Campaign Data 26', 'Campaign Data 27', 'Campaign Data 28', 'Campaign Data 29', 'Campaign Data 30', 'Campaign Data 31', 'Campaign Data 32', 'Campaign Data 33', 'Campaign Data 34', 'Campaign Data 35', 'External Reference 1', 'External Reference 2', 'External Reference 3', 'External Reference 4', 'External Reference 5', 'External Reference 6', 'External Reference 7', 'External Reference 8', 'External Reference 9', 'External Reference 10', 'Email Address', 'Title', 'First Name', 'Middle Name', 'Last Name', 'Address 1', 'Address 2', 'Address 3', 'City', 'Region', 'Postcode', 'Country', 'Phone Number', '_69'];
      const actualColumns = Object.keys(results[0]);

      assert.deepStrictEqual(
        actualColumns,
        expectedColumns,
      )

      const johnRow = results.find(
        (row) =>
          row['Campaign Type'] === type_1 &&
          row['Supporter Email'] === email

      );
      console.log(johnRow)

      assert.ok(johnRow, 'John Doe row should exist');

      const johnRow2 = results.find(
        (row) =>
          row['Campaign Type'] === type_2 &&
          row['Supporter Email'] === email

      );
      assert.ok(johnRow2, 'John Doe row should exist');

      const johnRow3 = results.find(
        (row) =>
          row['Campaign Type'] === type_3 &&
          row['Supporter Email'] === email &&
          row['Campaign Data 4'] === PPAYamount

      );
      assert.ok(johnRow3, 'John Doe row should exist');

      const johnRow4 = results.find(
        (row) =>
          row['Campaign Type'] === type_4 &&
          row['Supporter Email'] === email &&
          row['Campaign Data 4'] === PACSamount 

      );
      assert.ok(johnRow4, 'John Doe row should exist');


      console.log('CSV data assertions passed!');
    });
}

async function dataRegValNewJoinTeamEN(page, email, type_1, type_2, PPAYamount, type_3) {

  await page.locator('.gadget__actions > span:nth-child(5)').click();
  await page.getByRole('button', { name: 'Download Transaction History' }).click();
  const downloadPromise = await page.waitForEvent('download');

  const download = await downloadPromise;
  const filePath = './data.csv';

  // Save the downloaded file
  await download.saveAs(filePath);
  const csvParser = require('csv-parser');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      //Process the CSV data here
      //assert.strictEqual(results.length, 3, 'Number of rows should be 3');
      const expectedColumns = [
        'Account ID', 'Supporter ID', 'Supporter Email', 'Date Created', 'Date Modified', 'Campaign Number', 'Campaign Type', 'Campaign ID', 'Campaign Date', 'Campaign Time', 'Campaign Status', 'Campaign Data 1', 'Campaign Data 2', 'Campaign Data 3', 'Campaign Data 4', 'Campaign Data 5', 'Campaign Data 6', 'Campaign Data 7', 'Campaign Data 8', 'Campaign Data 9', 'Campaign Data 10', 'Campaign Data 11', 'Campaign Data 12', 'Campaign Data 13', 'Campaign Data 14', 'Campaign Data 15', 'Campaign Data 16', 'Campaign Data 17', 'Campaign Data 18', 'Campaign Data 19', 'Campaign Data 20', 'Campaign Data 21', 'Campaign Data 22', 'Campaign Data 23', 'Campaign Data 24', 'Campaign Data 25', 'Campaign Data 26', 'Campaign Data 27', 'Campaign Data 28', 'Campaign Data 29', 'Campaign Data 30', 'Campaign Data 31', 'Campaign Data 32', 'Campaign Data 33', 'Campaign Data 34', 'Campaign Data 35', 'External Reference 1', 'External Reference 2', 'External Reference 3', 'External Reference 4', 'External Reference 5', 'External Reference 6', 'External Reference 7', 'External Reference 8', 'External Reference 9', 'External Reference 10', 'Email Address', 'Title', 'First Name', 'Middle Name', 'Last Name', 'Address 1', 'Address 2', 'Address 3', 'City', 'Region', 'Postcode', 'Country', 'Phone Number', '_69'];
      const actualColumns = Object.keys(results[0]);

      assert.deepStrictEqual(
        actualColumns,
        expectedColumns,
      )

      const newTeamRow = results.find(
        (row) =>
          row['Campaign Type'] === type_1 &&
          row['Supporter Email'] === email

      );
      console.log(newTeamRow)

      const newTeamRow2 = results.find(
        (row) =>
          row['Campaign Type'] === type_2 &&
          row['Supporter Email'] === email &&
          row['Campaign Data 4'] === PPAYamount

      );
      assert.ok(newTeamRow2, 'John Doe row should exist');

      const newTeamRow3 = results.find(
        (row) =>
          row['Campaign Type'] === type_3 &&
          row['Supporter Email'] === email

      );
      assert.ok(newTeamRow3, 'John Doe row should exist');


      console.log('CSV data assertions passed!');
    });
}

async function dataRegValJoinTeamEN(page, email, type_1, type_2, PPAYamount, type_3) {

  await page.locator('.gadget__actions > span:nth-child(5)').click();
  await page.getByRole('button', { name: 'Download Transaction History' }).click();
  const downloadPromise = await page.waitForEvent('download');

  const download = await downloadPromise;
  const filePath = './data.csv';

  // Save the downloaded file
  await download.saveAs(filePath);
  const csvParser = require('csv-parser');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      //Process the CSV data here
      //assert.strictEqual(results.length, 3, 'Number of rows should be 3');
      const expectedColumns = [
        'Account ID', 'Supporter ID', 'Supporter Email', 'Date Created', 'Date Modified', 'Campaign Number', 'Campaign Type', 'Campaign ID', 'Campaign Date', 'Campaign Time', 'Campaign Status', 'Campaign Data 1', 'Campaign Data 2', 'Campaign Data 3', 'Campaign Data 4', 'Campaign Data 5', 'Campaign Data 6', 'Campaign Data 7', 'Campaign Data 8', 'Campaign Data 9', 'Campaign Data 10', 'Campaign Data 11', 'Campaign Data 12', 'Campaign Data 13', 'Campaign Data 14', 'Campaign Data 15', 'Campaign Data 16', 'Campaign Data 17', 'Campaign Data 18', 'Campaign Data 19', 'Campaign Data 20', 'Campaign Data 21', 'Campaign Data 22', 'Campaign Data 23', 'Campaign Data 24', 'Campaign Data 25', 'Campaign Data 26', 'Campaign Data 27', 'Campaign Data 28', 'Campaign Data 29', 'Campaign Data 30', 'Campaign Data 31', 'Campaign Data 32', 'Campaign Data 33', 'Campaign Data 34', 'Campaign Data 35', 'External Reference 1', 'External Reference 2', 'External Reference 3', 'External Reference 4', 'External Reference 5', 'External Reference 6', 'External Reference 7', 'External Reference 8', 'External Reference 9', 'External Reference 10', 'Email Address', 'Title', 'First Name', 'Middle Name', 'Last Name', 'Address 1', 'Address 2', 'Address 3', 'City', 'Region', 'Postcode', 'Country', 'Phone Number', '_69'];
      const actualColumns = Object.keys(results[0]);

      assert.deepStrictEqual(
        actualColumns,
        expectedColumns,
      )

      const joinTeamRow = results.find(
        (row) =>
          row['Campaign Type'] === type_1 &&
          row['Supporter Email'] === email

      );
      console.log(joinTeamRow)

      const joinTeamRow2 = results.find(
        (row) =>
          row['Campaign Type'] === type_2 &&
          row['Supporter Email'] === email &&
          row['Campaign Data 4'] === PPAYamount

      );
      assert.ok(joinTeamRow2, 'John Doe row should exist');

      const joinTeamRow3 = results.find(
        (row) =>
          row['Campaign Type'] === type_3 &&
          row['Supporter Email'] === email

      );
      assert.ok(joinTeamRow3, 'John Doe row should exist');


      console.log('CSV data assertions passed!');
    });
}

async function dataEnP2P(page) {

  await page.goto(
    "https://test.engagingnetworks.app")
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('evy_testaccount01@engagingnetworks.net');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('EasyPass@1241');
  await page.getByLabel('Password:').press('Enter');
  await page.getByRole('link', { name: 'P2P (beta) ❯' }).click();
  await page.getByRole('link', { name: 'Sites' }).click();
  await page.getByPlaceholder('Search for a site name or ID').click();
  await page.getByPlaceholder('Search for a site name or ID').fill('Unite For Animals');
  await page.getByPlaceholder('Search for a site name or ID').press('Enter');
  await page.getByText('Unite For Animals P2P IATS').click();
  await page.locator('li').filter({ hasText: 'Unite For Animals P2P IATS' }).getByRole('link').click();
}

async function dataDonationExport(page, f_firstName, f_lastName, emailCreat) {

  await page.getByRole('button', { name: 'Export as CSV' }).click();
  const downloadPromise = await page.waitForEvent('download');
  // Get the downloaded file path

  //   const downloadPromise = page.waitForEvent('download');
  // await page.getByText('Download file').click();
  const download = await downloadPromise;

  const filePath = './data.csv';

  // Save the downloaded file
  await download.saveAs(filePath);
  const csvParser = require('csvparser');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      // Process the CSV data here
      //assert.strictEqual(results.length, 3, 'Number of rows should be 3');
      // const expectedColumns = ['Participant ID', 'Site ID', 'Created On', 
      // 'Modified On', Status,  'Last Login', 'Has Modified', 'Goal Amount Option',
      //  'Page ID', 'Page Name', 'Page Image URL', 'Page URL', Currency, 
      //  'Goal Amount', 'Goal Met','First Name', 'Last Name', 'Raised Amount', 'Email Address'];
      // const actualColumns = Object.keys(results[0]);

      // assert.match(
      //   actualColumns,
      //   expectedColumns,
      // )

      const johnRow = results.find(
        (row) =>
          row['First Name'] === f_firstName &&
          row['Last Name'] === f_lastName &&
          row['Email Address'] === emailCreat &&
          row['Raised Amount'] === '50.00'

      );
      assert.ok(johnRow, 'John Doe row should exist');


      console.log('CSV data assertions passed!');
    });

}

async function dataDonationReport(page, f_firstName, f_lastName, emailCreat) {

  await page.getByRole('button', { name: 'Download CSV file' }).click();
  const downloadPromise = await page.waitForEvent('download');
  // Get the downloaded file path

  //   const downloadPromise = page.waitForEvent('download');
  // await page.getByText('Download file').click();
  const download = await downloadPromise;

  const filePath = './data.csv';

  // Save the downloaded file
  await download.saveAs(filePath);
  const csvParser = require('csv-parser');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      //Process the CSV data here
      //assert.strictEqual(results.length, 3, 'Number of rows should be 3');
      const expectedColumns = ['Site ID',
        'Site Name',
        'Supporter ID',
        'Page ID',
        'Page Name',
        'Is Team Page',
        'Is Captain',
        'Date',
        'Time',
        'Amount',
        'Currency',
        'Payment Type',
        'Transaction ID',
        'Appeal Code',
        'Soft Credit Type',
        'Made in Honor',
        'In Memory Of',
        'Status',
        'Error Reason',
        'Participant ID',
        'Site ID',
        'Created On',
        'Modified On',
        'Last Login',
        'Has Modified',
        'Goal Amount Option',
        'Page ID',
        'Page Name',
        'Page Image URL',
        'Page URL',
        'Goal Amount',
        'Goal Met',
        'First Name',
        'Last Name',
        'Raised Amount'];
      const actualColumns = Object.keys(results[0]);

      assert.deepStrictEqual(
        actualColumns,
        expectedColumns,
      )

      const johnRow = results.find(
        (row) =>
          // row['First Name'] === f_firstName &&
          // row['Last Name'] === f_lastName &&
          // row['Email Address'] === emailCreat &&
          row['Amount'] === '55.00'

      );
      assert.ok(johnRow, 'John Doe row should exist');


      console.log('CSV data assertions passed!');
    });

}

module.exports = {
  data, dataReg, dataRegValIndividualEN, dataRegValNewJoinTeamEN, dataRegValJoinTeamEN, dataEnP2P, dataDonation, dataDonation2, dataDonation3,
  dataLoginEN: dataLoginEN, dataDonationExport, dataDonationReport
};

