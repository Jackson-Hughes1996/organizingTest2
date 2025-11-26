import { $$ } from '@wdio/globals';
import Page from './page.js';

// Selectors for the home page
class HomePage extends Page {
    // Open the home page of the Heroku Internet App
    open(){
        return super.open('')
    }
    get listExamples(){
        // select all top-level list items on the page
        return $$('ul > li');
    }
}

export default new HomePage();