import { $ } from'@wdio/globals';
import Page from './page.js';

// Selectors for the checkboxes page
class CheckBoxesPage extends Page {
    // define selectors using getter method
    // get selector for checkbox 1 using nth of type
    get chkBox1 () {
        return $('#checkboxes input[type="checkbox"]:nth-of-type(1)');
    }
    // get selector for checbox 2 using nth of type
    get chkBox2 () {
        return $('#checkboxes input[type="checkbox"]:nth-of-type(2)');
    }
    // get selector for both checkboxes
    get checkboxes () {
        return $("/html//form[@id='checkboxes']")
    }
    open (){
        return super.open('checkboxes');
    }
}

export default new CheckBoxesPage();