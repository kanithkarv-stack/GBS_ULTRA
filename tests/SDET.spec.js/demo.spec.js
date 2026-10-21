// Alert & Dialog message handling 

/*const {test, expect} = require ('@playwright/test');

test ('Alert', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');
 
// Enabling alert message

page.on('dialog', async dialog => {

expect (dialog.type()).toContain('alert');
expect (dialog.message()).toContain("am an alert box!")
await dialog.accept();

})

await page.waitForTimeout(2000);
await page.locator('#alertBtn').click();
await page.waitForTimeout(3000);

});*/


//Hooks


/*import {test, expect} from '@playwright/test';

let page;

test.beforeEach(async ({browser}) => {

page=await browser.newPage();    

await page.goto('https://www.demoblaze.com/index.html')
await page.locator('#login2').click();
await page.locator('#loginusername', 'pavanol');
await page.locator('#loginpassword', 'test@123');
await page.locator("button[onclick='logIn()']").click();

});

test.afterEach(async() => {

await page.locator("//li[@class='nav-item active']//a[@class='nav-link']").click(); 
await page.waitForTimeout(2000)    
await page.locator('[id="logout2"]').click();
})

test ('Product', async () =>{

await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click();

    
page.on('dialog', async dialog => {

//expect (dialog.type()).toContain('alert');
expect (dialog.message()).toContain("Product added")
await dialog.accept();

});

await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click();
});*/



//Radio/ Check box

/*const {test, expect} = require ('@playwright/test');

test ('RCButton', async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');    
await page.mouse.wheel(0, 500);
await page.locator(['#sunday', '#tuesday', '#saturday' ]).check;
await page.waitForTimeout(5000);
  
});*/



/*const {test, expect} = require ('@playwright/test');

test ('test', async ({page}) => {

await page.locator('#name', "Kanith");
await page.locator('#email', 'Kanith@gmail.com');
await page.locator('#textarea', 'ABCD @ 123');
await page.waitForTimeout(2000);
await page.locator('#male').check;
await page.waitForTimeout(2000);
await page.locator('#tuesday').click;
await page.waitForTimeout(2000);
await page.locator('#country').selectOption({ value: 'india' });
await page.waitForTimeout(2000);
await page.locator('#colors').selectOption({index :5});
await page.waitForTimeout(2000);
await page.locator('#datepicker', "//a[normalize-space()='19']").click;
await page.waitForTimeout(2000)
await page.locator('#singleFileInput').setInputFiles('RBI Bond Dev Tracker (5).xlsx');
await page.waitForTimeout(2000);
await page.locator("//button[normalize-space()='Upload Single File']").click;
await page.waitForTimeout(3000);

});*/

import { test, expect } from '@playwright/test';

test('login, handle alert, verify Welcome Page, and logout', async ({ page }) => {
  await page.goto(
    'http://10.54.4.78:8322/gbmultra_ubi-1.0-SNAPSHOT/#!/login',
    {
      waitUntil: 'domcontentloaded',
    },
  );

  // Handle native confirmation dialogs such as:
  // "Are you sure want to Logout the Previous user"
  page.on('dialog', async (dialog) => {
    if (/are you sure|logout the previous user/i.test(dialog.message())) {
      await dialog.accept();
    } else {
      await dialog.dismiss();
    }
  });

  const usernameField = page.getByRole('textbox', { name: 'username' });
  await usernameField.click();
  await usernameField.fill('K1');

  const passwordField = page.getByRole('textbox', { name: 'PASSWORD' });
  await passwordField.click();
  await passwordField.fill('Ubi@1234');

  await page.getByRole('button', { name: 'Login' }).click();

  // Handle an in-page Yes button if the application displays one.
  const yesButton = page.getByRole('button', { name: /^Yes$/i });
  if (await yesButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await yesButton.click();
  }

  // Verify the Welcome Page.
  await expect(page.getByText(/Welcome Page/i)).toBeVisible({
    timeout: 20000,
  });

  // Open the user menu if Logout is not immediately visible.
  const userMenu = page.getByText(/Hi K1/i).first();
  if (await userMenu.isVisible().catch(() => false)) {
    await userMenu.click();
  }

  // Click Logout.
  const logoutButton = page.getByText('Logout', { exact: true });
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();

  // The Playwright test runner automatically closes the browser after the test.
});
