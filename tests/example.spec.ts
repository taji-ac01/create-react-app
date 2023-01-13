import { test, expect } from '@playwright/test';
import axios from 'axios';







test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {

  const number = await Promise.resolve(1);

  await page.goto('https://playwright.dev/');
  console.info(number)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await axios.get('https://api.zipaddress.net/?zipcode=9071801');

  // create a locator
  const getStarted = page.getByText('Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
