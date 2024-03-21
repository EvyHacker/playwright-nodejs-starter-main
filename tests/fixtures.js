// fixtures.js
const { Fixture } = require('playwright');
const faker = require('faker');
const { setTestData } = require('./data');

 const setupTestData = async ({}, testInfo) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const emailShrimp = `p2p_${firstName}.${lastName}_shrimp@engagingnetworks.online`.toLowerCase();
  const emailDress4Pet = `p2p_${firstName}.${lastName}_dress4pet@engagingnetworks.online`.toLowerCase();
  const email4U = `p2p_${firstName}.${lastName}_4u@engagingnetworks.online`.toLowerCase();
  const emailDogRun = `p2p_${firstName}.${lastName}_dogRun@engagingnetworks.online`.toLowerCase();
  const phone = faker.address.phone();
  const address = faker.address.streetAddress();
  const city = faker.address.city();
  const region = faker.address.region();
  const zipCode = faker.address.zipCode();
  const country = faker.address.country();
  const data = { firstName, lastName, emailShrimp, emailDress4Pet, email4U, emailDogRun,phone, 
    address, city, region, zipCode, country };
  setTestData(data);
};

module.exports = new Fixture({ setup: setupTestData });
