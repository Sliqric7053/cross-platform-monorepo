import { getGreeting } from '../support/app.po';
import { home } from '../support/app.po';

describe('wealth-portal', () => {
  beforeEach(() => cy.visit('/'));

  // it('should display welcome message', () => {
  //   getGreeting().contains('Welcome to wealth-portal!');
  // });

  // TODO: Ignore "getInfo" typeError - coming from Adobe Analytics

  it('should display the home page', () => {
    const homepageText = home.innerHTML;
    console.log('TCL: homepageText', homepageText);
    cy.get('.breadcrumb-text').contains('Home');
    // homepageText.includes('Home');
  });
});
