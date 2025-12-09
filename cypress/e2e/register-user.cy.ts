import { HomePage } from '@/pages/HomePage';
import { SignupPage } from '@/pages/SignupPage';
import { AccountDetailsPage } from '@/pages/AccountDetailsPage';

describe('Test Case 1: Register User', () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();
  const accountDetailsPage = new AccountDetailsPage();

  const userData = {
    name: 'John Doe',
    email: 'john.doe' + Date.now() + '@test.com',
    title: 'Mr' as const,
    password: 'Password123!',
    day: '15',
    month: 'June',
    year: '1990',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Test Company',
    address: '123 Test Street',
    address2: 'Apt 4B',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '1234567890',
    newsletter: true,
    specialOffers: true
  };

  beforeEach(() => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit();
  });

  it('Should register a new user successfully', () => {
    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible();

    // 4. Click on 'Signup / Login' button
    homePage.clickSignupLogin();

    // 5. Verify 'New User Signup!' is visible
    signupPage.verifyNewUserSignupVisible();

    // 6. Enter name and email address
    // 7. Click 'Signup' button
    signupPage.fillSignupForm(userData.name, userData.email);

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    accountDetailsPage.verifyEnterAccountInfoVisible();

    // 9-12. Fill details: Title, Name, Email, Password, Date of birth, checkboxes, and address details
    accountDetailsPage.fillAccountDetails(userData);

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    accountDetailsPage.verifyAccountCreatedVisible();

    // 15. Click 'Continue' button
    accountDetailsPage.clickContinue();

    // 16. Verify that 'Logged in as username' is visible
    homePage.verifyLoggedInAs(userData.name);

    // 17. Click 'Delete Account' button
    homePage.clickDeleteAccount();

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    accountDetailsPage.verifyAccountDeletedVisible();
    accountDetailsPage.clickContinue();
  });
});
