/*
const { test, expect } = require('@playwright/test');

test('GET API', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // Validate status code
  expect(response.status()).toBe(200);

  // Validate response body
  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody.name).toBe('Leanne Graham');
  expect(responseBody.username).toBe('Bret');

  console.log('Status:', response.status());
  console.log('Response:', responseBody);
});
*/

/*
const { test, expect } = require('@playwright/test');

test('POST API - Create user', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Kanithkar',
        username: 'QAEngineer',
        email: 'qa@example.com'
      }
    }
  );

  // Validate status code
  expect(response.status()).toBe(201);

  // Validate response body
  const responseBody = await response.json();

  console.log('Status:', response.status());
  console.log('Response:', responseBody);
});

*/


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.54.4.76:9085/gbmultra_ubi-1.0-SNAPSHOT_newmars/#!/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('k1');
  await page.getByRole('textbox', { name: 'PASSWORD' }).click();
  await page.getByRole('textbox', { name: 'PASSWORD' }).fill('Ubi@1234');
 await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Yes!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);
  //await page.getByRole('button', { name: 'Login' }).click();
  //await page.locator('.loader-new').click();
  await page.locator('.loader-new').click();
  await page.getByText('Bond Module').nth(1).click();
  await page.getByRole('link', { name: 'GU Functionality' }).click();
  await page.getByRole('link', { name: 'Bond Nomination' }).click();
  await page.getByTitle('Search BLA').click();
  await page.getByRole('cell', { name: '101BLA000671' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('row', { name: 'ABEL (NOM6261395780780) 30/06' }).getByRole('radio').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});






