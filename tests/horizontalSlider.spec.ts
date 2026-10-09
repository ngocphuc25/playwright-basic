import {test, expect} from '@playwright/test';

test('change range slider value', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');

    const slider = page.locator('input[type="range"]');
    const range = 3.5;

    await slider.focus();

    let sliderValue = Number(await slider.inputValue());

    while (sliderValue < range) {
        await slider.press('ArrowRight');
        sliderValue = Number(await slider.inputValue());
        console.log('Current value:', sliderValue);
    }

    await expect(page.locator('#range')).toHaveText('3.5');
});
