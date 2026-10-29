import { test, expect } from '@playwright/test';

test('add and remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.getByRole('button', { name: 'Add Element' }).click();

    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();

    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(2);

    await page.getByRole('button', { name: 'Delete' }).first().click();
    await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1);
});
