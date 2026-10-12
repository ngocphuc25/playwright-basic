import {test, expect} from './fixtures/heroku.fixture';
import { LoginPage } from './pages/login.page';

test('login success with valid credentials', async ({loginPage}) => {
    
    await loginPage.open();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.isLoginSuccessful());
})

test('login success with invalid password', async ({loginPage}) => {
  
    await loginPage.open();
    await loginPage.login('tomsmith1', 'SuperSecretPassw');
    await expect(loginPage.isLoginSuccessful()).resolves.toBe(false);
})

test('login success with invalid username', async ({loginPage}) => {
     
    await loginPage.open();
    await loginPage.login('tomsmi', 'SuperSecretPassword!');
    await expect(loginPage.isLoginSuccessful()).resolves.toBe(false);
})

