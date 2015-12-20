package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import junit.framework.TestCase;
import mt.edu.um.pom.ButtonPage;
import mt.edu.um.pom.DriverPage;
import mt.edu.um.pom.LoginPage;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import java.util.List;

import static junit.framework.TestCase.assertTrue;
import static junit.framework.TestCase.assertEquals;

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

    @And("I login")
    public void login()
    {
        loginPage.getSignInButton().click();
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
