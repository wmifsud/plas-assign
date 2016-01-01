package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import mt.edu.um.pom.ContactPage;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Created by waylon on 30/12/2015.
 */
public class Contact
{
    ContactPage contactPage = new ContactPage();

    @Given("^I select the (.*) icon$")
    public void selectContactIcon(String attributeName)
    {
        switch (attributeName)
        {
            case "create new contact":
                contactPage.getCreateContactIcon().click();
                break;
            case "navigate up":
                contactPage.getNavigateUpIcon().click();
                break;
            default:
                throw new IllegalArgumentException("Icon not supported: " + attributeName);
        }
    }

    @And("^I enter (.*) as (Name|Phone|Home|Email)$")
    public void placeContactText(String text, String attribute)
    {
        contactPage.getContactText(text, attribute).sendKeys(text);
    }

    @Then("^(.*) is under (.*)$")
    public void contactCreationAssertions(String text, String attribute)
    {
        switch (attribute)
        {
            case "contact name":
                WebElement largeTitle = contactPage.getLargeTitle();
                assertTrue(largeTitle.isDisplayed());
                assertEquals(largeTitle.getText(), text);
                break;
            case "Mobile":
            case "Home":
                assertTrue(contactPage.assertTextIsUnderAttribute(text, attribute));
                break;
            case "All contacts":
                contactPage.test();
                break;
            default:
                throw new IllegalArgumentException("Text: " + text + ", Attribute: " + attribute + " not supported");
        }
    }
}
