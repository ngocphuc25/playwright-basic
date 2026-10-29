import { expect, test } from '@playwright/test';

test('verify broken image', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');

    const images = page.locator('img');
    await expect.poll(() => images.evaluateAll(
        elements => elements.filter((element: HTMLImageElement) => element.complete && element.naturalWidth === 0).length,
    )).toBe(2);
});
