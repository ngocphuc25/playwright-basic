    import { test, expect } from '@playwright/test';

test('verify tinymce editor content', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');

    const editor = page.frameLocator('#mce_0_ifr').locator('body#tinymce');
    await expect(editor).toContainText('Your content goes here.');
});
