import { $ } from'@wdio/globals'
import Page from './page.js';

class ChallengingDom extends Page {
    }
    // Using the open function from the page.js file containing the class that ChallengingDom extends
    open() {
        return super.open('challenging_dom')
    }
    // Get selector for the link at the bottom of the page using the Link Text method from WDIO
    get linkText(){
        return $('=Elemental Selenium');
    }
    // Get selector for the link at the bottom of the page using the Partial Link Text method from WDIO
    get partLink(){
        return $('*=Selenium');
    }
    // Get selector for row 1 column 2 of the table on the Challenging DOM page "Apeirian0"
    get apeirian0(){
        return $("//td[normalize-space()='Apeirian0']")
    }
}
export default new ChallengingDom();
