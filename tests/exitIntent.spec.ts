import { test, expect } from '@playwright/test';

test('verify exit intent modal shows on mouse out', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/exit_intent');

   await page.mouse.move(500, 200);
await page.mouse.move(500, -50, { steps: 5 });

    await expect(page.locator('.modal-title')).toContainText('This is a modal window', { timeout: 20000 });
     await page.getByText('Close').click();
     await expect(page.locator('.modal-title')).toBeHidden();
});
