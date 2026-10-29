import { Expect,Locator,Page } from "@playwright/test";

export class ForgotPasswordPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async open() {
        await this.page.goto('https://the-internet.herokuapp.com/forgot_password');
    }
    async forgotpassword(email: string) {
    await this.page.getByRole('textbox', {name: 'Email'}).fill(email);
    await this.page.getByRole('button', {name: 'Submit'}).click();
    }
    async isForgotPasswordSuccessful() {
        if (await this.page.getByRole('heading', {name: 'Secure Area'}).first().isVisible()) {
            return true;
        }
    }
}