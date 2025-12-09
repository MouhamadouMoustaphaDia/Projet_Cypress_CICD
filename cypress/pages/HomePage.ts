export class HomePage {
  private readonly url = 'http://automationexercise.com';
  private readonly signupLoginButton = 'a[href="/login"]';
  private readonly deleteAccountButton = 'a[href="/delete_account"]';
  private readonly loggedInUserText = 'li:has(b)';

  visit(): void {
    cy.visit(this.url);
  }

  clickSignupLogin(): void {
    cy.get(this.signupLoginButton).click();
  }

  clickDeleteAccount(): void {
    cy.get(this.deleteAccountButton).click();
  }

  verifyHomePageVisible(): void {
    cy.url().should('include', 'automationexercise.com');
    cy.get('body').should('be.visible');
  }

  verifyLoggedInAs(username: string): void {
    cy.get(this.loggedInUserText).should('contain', 'Logged in as').and('contain', username);
  }
}
