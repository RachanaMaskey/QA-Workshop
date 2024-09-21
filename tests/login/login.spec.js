// @ts-check
const { test, expect } = require('@playwright/test');

test('Login using valid username and password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/')

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("rachana@gmail.com");//or .type
  await page.getByPlaceholder("Password").fill("rachana123");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//p[text()="Click on any contact to view the Contact Details"]')).toHaveText('Click on any contact to view the Contact Details');
});

test('Login using invalid username and valid password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("abc@gmail.com");//or .type
  await page.getByPlaceholder("Password").fill("rachana123");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});

test('Login using valid username and invalid password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("rachana@gmail.com");//or .type
  await page.getByPlaceholder("Password").fill("rac123");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});

test('Login using invalid username and invalid password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("rac@gmail.com");//or .type
  await page.getByPlaceholder("Password").fill("rac123");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});


test('Login using empty username and valid password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("");//or .type
  await page.getByPlaceholder("Password").fill("rachana123");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});

test('Login using empty username and invalid password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("");//or .type
  await page.getByPlaceholder("Password").fill("rac123");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});

test('Login using valid username and empty password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("rachana@gmail.com");//or .type
  await page.getByPlaceholder("Password").fill("");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});

test('Login using invalid username and empty password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("rac@gmail.com");//or .type
  await page.getByPlaceholder("Password").fill("");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});

test('Login using empty username and empty password ', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

  // Click the get started link.
  await page.getByPlaceholder("Email").fill("");//or .type
  await page.getByPlaceholder("Password").fill("");
  await page.locator("//button[@id='submit']").click();

  await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});