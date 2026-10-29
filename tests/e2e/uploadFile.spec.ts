import {test, expect} from '@playwright/test';

test('upload a file', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    
    await page.setInputFiles('input[type="file"]', {
        name: 'resume.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Playwright file upload test'),
    });
    
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.locator('#uploaded-files')).toContainText('resume.txt');
});
