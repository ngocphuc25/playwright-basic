import { test, expect } from '@playwright/test';

test('verify forgot password form submits', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    await expect(page.getByRole('heading', { name: 'Forgot Password' })).toBeVisible();
    await page.locator('#email').fill('test@example.com');
    await page.locator('#form_submit').click();

    await expect(page.getByText("Your e-mail's been sent!")).toBeVisible();
});
