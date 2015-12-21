package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import mt.edu.um.pom.ButtonPage;
import mt.edu.um.pom.LoginPage;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

/**
 * Created by waylon on 06/12/2015.
 */
public class Login extends ButtonPage
{
    private LoginPage loginPage = new LoginPage();

    @When("^I click on the sign in link from (.*)$")
    public void signInClick(String signInLinkFrom)
    {
        switch (signInLinkFrom)
        {
            case "sign in button":
                loginPage.getSignInButton().click();
                break;
            case "sign in header button":
                loginPage.getHeaderSignInLink().click();
                break;
            default:
                loginPage.getHeaderMenu().click();
                loginPage.getSignInLink().click();
        }
    }

    @And("^I enter ([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+) as emailaddress$")
    public void inputEmailAddress(String email)
    {
        loginPage.getUserNameTextBox().sendKeys(email);
    }

    @And("^I enter (.*) as password")
    public void inputPassword(String password)
    {
        loginPage.getPasswordTextBox().sendKeys(password);
    }

    @Then("^I am logged in$")
    public void loggedInCheck()
    {
        assertTrue(loginPage.getAccountMenuLink().isDisplayed());
    }

    @Then("^the error message specifies that (.*)$")
    public void errorDisplayedCheck(String errorMessage)
    {
        assertEquals(loginPage.getPasswordError().getText(), errorMessage);
    }

    @And("I login with (sign in|header) link")
    public void login(String method)
    {
        if ("sign in".equals(method))
        {
            loginPage.getSignInButton().click();
        }
        else
        {
            loginPage.getHeaderSignInLink().click();
        }

        inputEmailAddress("waylonmifsud@gmail.com");
        inputPassword("3v3rn0t3");
        getSignUpButton().click();
    }

    @And("I logout")
    public void logout()
    {
        loginPage.getAccountMenuLink().click();
        loginPage.getLogoutLink().click();
    }
}
