import { test, expect } from '@playwright/test';

test('verify slow resource page loads', async ({ page }) => {
    test.setTimeout(60000);

    const slowResponse = page.waitForResponse(
        (res) => res.url().includes('slow_external'),
        { timeout: 45000 }
    );

    await page.goto('https://the-internet.herokuapp.com/slow');
    await expect(page.getByRole('heading', { name: 'Slow Resources' })).toBeVisible({ timeout: 45000 });

    const res = await slowResponse;
    expect([200, 503]).toContain(res.status());
});
