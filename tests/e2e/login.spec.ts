import { expect, test } from './fixtures/heroku.fixture';

test('login success with valid credentials', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.secureAreaHeading()).toBeVisible();
});

test('login rejects invalid password', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('tomsmith', 'SuperSecretPassw');
    await expect(loginPage.secureAreaHeading()).toBeHidden();
    await expect(loginPage.page.locator('#flash')).toContainText('Your password is invalid!');
});

test('login rejects invalid username', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('tomsmi', 'SuperSecretPassword!');
    await expect(loginPage.secureAreaHeading()).toBeHidden();
    await expect(loginPage.page.locator('#flash')).toContainText('Your username is invalid!');
});
