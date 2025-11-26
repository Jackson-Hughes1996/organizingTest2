import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import CheckBoxesPage from '../pageobjects/checkboxes.page.js'
import { TestData } from '../login.data.js'

// Original login test with the hardcoded credentials
describe.skip('My Login application', () => {
    it('should login with valid hardcoded credentials', async () => {
        await LoginPage.open()
        await browser.maximizeWindow();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

// New login test using the TestData class for credentials
describe('My Login application, both valid and invalid using separate test data', () => {
    it('should login with valid credentials from login.data.js', async () => {
        await LoginPage.open()
        await browser.maximizeWindow();
        // Hardcoded valid login information removed, replaced with TestData class and object usage.
        // This improves maintainability and readability of the test code.
        // TestData is the class, validUser is the object and username / password are the properties within the object.
        await LoginPage.login(TestData.validUser.username, TestData.validUser.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
    it('should attempt to login with invalid credentials from login.data.js', async () => {
        await LoginPage.open()
        await browser.maximizeWindow();
        // Hardcoded invalid login information replaced with TestData class and object usage.
        // This improves maintainability and readability of the test code.
        // TestData is the class, validUser is the object and username / password are the properties within the object.
        await LoginPage.login(TestData.invalidUser.username, TestData.invalidUser.password)
        await expect(LoginPage.flashAlert).toBeExisting(
            expect.stringContaining('Your username is invalid!'))
    });
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