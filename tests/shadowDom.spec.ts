import { test, expect } from '@playwright/test';

test('verify shadow dom text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/shadowdom');

    await expect(page.getByText("Let's have some different text!").first()).toBeVisible();
});
