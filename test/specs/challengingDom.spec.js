import ChallengingDom from "../pageobjects/challengingDom.page.js";

describe('Challenging DOM page test suite', () => {
    it('should open the right page of the Heroku App site', async () => {
        // Navigate to the challenging dom page of the heroku app and maximize the window
        await ChallengingDom.open();
        // maximize the window of the google chrome browser
        await browser.maximizeWindow();
    });
    it('should use the full link text to state the link exists', async () => {
        // Confirming the link exists via the full text method.
        await expect(ChallengingDom.linkText).toExist();
        // Confirming that the link has the right text.
        await expect(ChallengingDom.linkText).toHaveText("Elemental Selenium")
    });
    it('should use the partial link text to state the link exists', async () => {
        // Confirming the link exists via the partial text method rather than the full text
        await expect(ChallengingDom.partLink).toExist()
        await expect(ChallengingDom.partLink).toHaveText(expect.stringContaining('Elemental'));
    });
    it('should confirm that the table has Apeirian0 as an entry using the xPath', async () => {
        // Confirm that the text in question exists via the xPath
        await expect(ChallengingDom.apeirian0).toExist();
        // Check that the text inside said element matches what it is expected to be
        await expect(ChallengingDom.apeirian0).toHaveText('Apeirian0');
    });
});