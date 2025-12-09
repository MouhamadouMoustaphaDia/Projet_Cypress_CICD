export class AccountDetailsPage {
  private readonly enterAccountInfoTitle = 'h2:contains("Enter Account Information")';
  private readonly titleMr = 'input[value="Mr"]';
  private readonly titleMrs = 'input[value="Mrs"]';
  private readonly passwordInput = 'input[data-qa="password"]';
  private readonly daysSelect = 'select[data-qa="days"]';
  private readonly monthsSelect = 'select[data-qa="months"]';
  private readonly yearsSelect = 'select[data-qa="years"]';
  private readonly newsletterCheckbox = 'input[name="newsletter"]';
  private readonly specialOffersCheckbox = 'input[name="optin"]';
  private readonly firstNameInput = 'input[data-qa="first_name"]';
  private readonly lastNameInput = 'input[data-qa="last_name"]';
  private readonly companyInput = 'input[data-qa="company"]';
  private readonly addressInput = 'input[data-qa="address"]';
  private readonly address2Input = 'input[data-qa="address2"]';
  private readonly countrySelect = 'select[data-qa="country"]';
  private readonly stateInput = 'input[data-qa="state"]';
  private readonly cityInput = 'input[data-qa="city"]';
  private readonly zipcodeInput = 'input[data-qa="zipcode"]';
  private readonly mobileNumberInput = 'input[data-qa="mobile_number"]';
  private readonly createAccountButton = 'button[data-qa="create-account"]';
  private readonly accountCreatedTitle = 'h2:contains("Account Created!")';
  private readonly continueButton = 'a[data-qa="continue-button"]';
  private readonly accountDeletedTitle = 'h2:contains("Account Deleted!")';

  verifyEnterAccountInfoVisible(): void {
    cy.get(this.enterAccountInfoTitle).should('be.visible');
  }

  selectTitle(title: 'Mr' | 'Mrs'): void {
    if (title === 'Mr') {
      cy.get(this.titleMr).check();
    } else {
      cy.get(this.titleMrs).check();
    }
  }

  enterPassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  selectDateOfBirth(day: string, month: string, year: string): void {
    cy.get(this.daysSelect).select(day);
    cy.get(this.monthsSelect).select(month);
    cy.get(this.yearsSelect).select(year);
  }

  selectNewsletter(): void {
    cy.get(this.newsletterCheckbox).check();
  }

  selectSpecialOffers(): void {
    cy.get(this.specialOffersCheckbox).check();
  }

  enterFirstName(firstName: string): void {
    cy.get(this.firstNameInput).type(firstName);
  }

  enterLastName(lastName: string): void {
    cy.get(this.lastNameInput).type(lastName);
  }

  enterCompany(company: string): void {
    cy.get(this.companyInput).type(company);
  }

  enterAddress(address: string): void {
    cy.get(this.addressInput).type(address);
  }

  enterAddress2(address2: string): void {
    cy.get(this.address2Input).type(address2);
  }

  selectCountry(country: string): void {
    cy.get(this.countrySelect).select(country);
  }

  enterState(state: string): void {
    cy.get(this.stateInput).type(state);
  }

  enterCity(city: string): void {
    cy.get(this.cityInput).type(city);
  }

  enterZipcode(zipcode: string): void {
    cy.get(this.zipcodeInput).type(zipcode);
  }

  enterMobileNumber(mobileNumber: string): void {
    cy.get(this.mobileNumberInput).type(mobileNumber);
  }

  clickCreateAccount(): void {
    cy.get(this.createAccountButton).click();
  }

  verifyAccountCreatedVisible(): void {
    cy.get(this.accountCreatedTitle).should('be.visible');
  }

  clickContinue(): void {
    cy.get(this.continueButton).click();
  }

  verifyAccountDeletedVisible(): void {
    cy.get(this.accountDeletedTitle).should('be.visible');
  }

  fillAccountDetails(data: {
    title: 'Mr' | 'Mrs';
    password: string;
    day: string;
    month: string;
    year: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
    newsletter?: boolean;
    specialOffers?: boolean;
  }): void {
    this.selectTitle(data.title);
    this.enterPassword(data.password);
    this.selectDateOfBirth(data.day, data.month, data.year);
    
    if (data.newsletter) {
      this.selectNewsletter();
    }
    
    if (data.specialOffers) {
      this.selectSpecialOffers();
    }
    
    this.enterFirstName(data.firstName);
    this.enterLastName(data.lastName);
    this.enterCompany(data.company);
    this.enterAddress(data.address);
    this.enterAddress2(data.address2);
    this.selectCountry(data.country);
    this.enterState(data.state);
    this.enterCity(data.city);
    this.enterZipcode(data.zipcode);
    this.enterMobileNumber(data.mobileNumber);
    this.clickCreateAccount();
  }
}
