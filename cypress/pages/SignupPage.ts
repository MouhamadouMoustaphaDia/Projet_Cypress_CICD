export class SignupPage {
  private readonly newUserSignupTitle = 'h2:contains("New User Signup!")';
  private readonly nameInput = 'input[data-qa="signup-name"]';
  private readonly emailInput = 'input[data-qa="signup-email"]';
  private readonly signupButton = 'button[data-qa="signup-button"]';

  enterName(name: string): void {
    cy.get(this.nameInput).type(name);
  }

  enterEmail(email: string): void {
    cy.get(this.emailInput).type(email);
  }

  clickSignup(): void {
    cy.get(this.signupButton).click();
  }

  verifyNewUserSignupVisible(): void {
    cy.get(this.newUserSignupTitle).should('be.visible');
  }

  fillSignupForm(name: string, email: string): void {
    this.enterName(name);
    this.enterEmail(email);
    this.clickSignup();
  }
}
