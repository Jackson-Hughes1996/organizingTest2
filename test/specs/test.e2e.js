import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import CheckBoxesPage from '../pageobjects/checkboxes.page.js'

describe.skip('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

describe.skip('Confirm check boxes', () => {
    // create a new page object page for checkboxes
    // 1st test: navigate to checkboxes page and confirm that checkbox 1 is unchecked
    it('Confirm checkbox 1 is unchecked', async () => {
        // navigate to the checkboxes page
        await CheckBoxesPage.open()
        // Maximize the window in order to see the whole window
        await browser.maximizeWindow();
        // Confirm that checkbox 1 is not checked
        // You can also use toBeSelected() returns true if checked, false if not checked
        await expect(CheckBoxesPage.chkBox1).not.toBeChecked();
        // Await expect(CheckBoxesPage.chkBox1).toMatchElementSnapshot
    });
    // 2nd test: uncheck checkbox 2 and confirm it is unchecked
    it('Should uncheck checkbox 2 and confirm checkbox 2 is unchecked', async () => {
        // Navigate to the checkboxes page once again
        await CheckBoxesPage.open();
        // Maximize the window in order to see the whole window
        await browser.maximizeWindow();
        // Check whether checkbox 2 is selected and click it to un-select it if it is selected
        if (await CheckBoxesPage.chkBox2.isSelected()) {
            await CheckBoxesPage.chkBox2.click();
        }
        // Check to confirm checkbox 2 is not selected
        await expect(CheckBoxesPage.chkBox2).not.toBeSelected();
    });
})