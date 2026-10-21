/*const {test, expect} = require ('@playwright/test')

test ('ScreenSchot', async ({page}) => {

    await page.goBack('https://wecare.inspirisys.com/')
    await page.waitForTimeout(2000)
    await page.screenshot({path:'tests/ScreenShot/'+ Date.now()+'TimeSheet.png'})


})*/

/*const {test, expect} = require ('@playwright/test')

test.only ('Step1', async ({page}) => {

await page.goto('https://wecare.inspirisys.com/')
await page.waitForTimeout(2000)
await page.locator('(//div[@class="row form-group"])[2]').screenshot({path: 'tests/ScreenShot/ScreenShot.png'});
//await page.screenshot({path:'tests/ScreenShot/'+ Date.now()+'Sheet.png', fullPage: true})


})*/


/*const {test, expect} = require('@playwright/test')

test ('Keyboard', async ({page}) => {

await page.goto('https://text-compare.com/')

await page.waitForTimeout(1000);

await page.locator('#inputText1').click()

await page.waitForTimeout(1000);

await page.fill('Kanithkar')

await page.waitForTimeout(1000);

await page.keyboard.press('Control + A')

await page.waitForTimeout(1000);

await page.keyboard.press('Control + C')

await page.waitForTimeout(1000);

await page.keyboard.down('Tab')

await page.waitForTimeout(1000);

await page.keyboard.up('Tab')

await page.waitForTimeout(1000);

await page.keyboard.press('Control + V')

await page.waitForTimeout(3000)


})*/

/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://text-compare.com/');
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Paste one version of a text' }).click();
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Paste one version of a text' }).fill('Kanithkar');
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Paste one version of a text' }).press('ControlOrMeta+a');
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Paste one version of a text' }).press('ControlOrMeta+c');
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Paste another version of the' }).click();
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Paste another version of the' }).fill('Kanithkar');
  await page.waitForTimeout(5000)
});*/

/*impor/*t { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.54.4.78:8322/gbmultra_ubi-1.0-SNAPSHOT/#!/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('k1');
  await page.getByRole('textbox', { name: 'username' }).press('Tab');
  await page.getByRole('textbox', { name: 'PASSWORD' }).fill('Ubi@1234');
  await page.getByRole('textbox', { name: 'PASSWORD' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.pause()
  await page.getByText('CBS Integration').click();
  await page.getByRole('link', { name: 'Bulk Upload' }).click();  
  await page.getByRole('link', { name: 'Upload' }).click();
  await page.pause()
  await page.waitForTimeout(2000)
  await page.getByLabel('#Functionality').selectOption('value=bankbranch');
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.waitForTimeout(2000)
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Test Case and Summary Template.xls');
  await page.waitForTimeout
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Yes!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});*/




/*const {test, expect} = require ('@playwright/test')

test('test', async ({ page }) => {
   await page.goto ('https://testautomationpractice.blogspot.com/')
   
   await page.fill('#name', 'Kanithkar')
   await page.fill('#email', 'Kanith@gmail.com')
   await page.fill('#phone','1234567890')
   //await page.('gender')
   //const Count=await page.locator('#country option')
   //await expect (Count).toHaveCount(10)
   const allOptions = await page.locator('#country option').allTextContents()
   console.log('Count:',allOptions.length)
   console.log(allOptions)

});*/


/*const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0, 500);

    await page.waitForTimeout(3000);

    const checkboxes = [
        '//*[@id="sunday"]',
        '//*[@id="wednesday"]',
        '//*[@id="saturday"]'
    ];

    // Select the checkboxes
    for (const locator of checkboxes) {
        await page.locator(locator).check();
    }

    // Verify and uncheck them
    for (const locator of checkboxes) {

        await page.waitForTimeout(2000);

        if (await page.locator(locator).isChecked()) {
            console.log(locator + ' is checked');

            await page.locator(locator).uncheck();
        }

        await page.waitForTimeout(2000);
    }
});*/


/*const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);

    if (await page.locator('#logout2').isVisible()) {
        await page.locator('#logout2').click();
    }
});

test('Hooks', async ({ page }) => {

    // Login
    await page.locator('#login2').click();
    await page.fill('#loginusername', 'pavanol');
    await page.locator('#loginpassword').fill('loginpassword');
    await page.locator("//button[normalize-space()='Log in']").click();

    // Add product
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

    // Register dialog handler BEFORE the action that triggers it
    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

    await page.locator("//a[normalize-space()='Add to cart']").click();

    // Home page
    await page.locator('.nav-link').first().click();
});*/



/*const {test, expect} = require ('@playwright/test')

test ('datePicker', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('#datepicker').click();

await page.waitForTimeout(1000);

await page.locator("//a[normalize-space()='20']").click()

await page.waitForTimeout(3000);

})*/



//File uploaded, Remove and screenshots

/*const {test, expect} = require ('@playwright/test');
const { waitForDebugger } = require('node:inspector');

test ('datePicker', async ({page}) => {

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

await page.mouse.wheel(0, 500);

    //await page.waitForSelector('#fileInput');

    await page.waitForSelector('#filesToUpload')
    await page.locator('#filesToUpload')
    .setInputFiles(['tests/File_Upload/Test Case and Summary Template.xlsx',
                    'tests/File_Upload/Copy of OLTAS Links.xlsx']);

await page.waitForTimeout(5000)
await page.locator('//*[@id="main"]/div').screenshot({path:'tests/ScreenShot/'+ Date.now()+'Sheet.png', fullPage: true})
await page.locator('#filesToUpload').setInputFiles([]);
await page.screenshot({path:'tests/ScreenShot/'+ Date.now()+'Sheet.png', fullPage: true})

await page.waitForTimeout(3000)

})*/


