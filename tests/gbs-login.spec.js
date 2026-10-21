import { test, expect } from '@playwright/test';

test('log in through Welcome Page and log out', async ({ page }) => {
  await page.goto(
    'http://10.54.4.78:8322/gbmultra_ubi-1.0-SNAPSHOT/#!/login',
    {
      waitUntil: 'domcontentloaded',
    },
  );

  const usernameField = page.getByRole('textbox', { name: 'username' });
  await usernameField.click();
  await usernameField.fill('K1');

  const passwordField = page.getByRole('textbox', { name: 'PASSWORD' });
  await passwordField.click();
  await passwordField.fill('Ubi@1234');

  page.on('dialog', async (dialog) => {
    if (/are you sure|logout the previous user/i.test(dialog.message())) {
      await dialog.accept();
    }
  });

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);

  // const yesButton = page.getByRole('button', { name: /^Yes$/i });
  // if (await yesButton.isVisible().catch(() => false)) {
  //   await yesButton.click();
  // }
  // await page.waitForTimeout(5000);
  // const userMenu = page.getByText(/Hi K1.*Logout/i).first();
  

});



