package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import mt.edu.um.pom.ContactPage;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * @author waylon on 30/12/2015.
 */
public class Contact
{
    ContactPage contactPage = new ContactPage();

    @Given("^I select (.*) (icon|contact)$")
    public void selectContactIcon(String attributeName, String type)
    {
        if ("contact".equals(type))
        {
            contactPage.getContact(attributeName).click();
        }
        else
        {
            switch (attributeName)
            {
                case "create new contact":
                    contactPage.getCreateContactIcon().click();
                    break;
                case "navigate up":
                    contactPage.getNavigateUpIcon().click();
                    break;
                case "edit":
                    contactPage.getEditIcon().click();
                    break;
                case "favorites":
                    contactPage.getFavoritesIcon().click();
                    break;
                default:
                    throw new IllegalArgumentException("Icon not supported: " + attributeName);
            }
        }
    }

    @And("^I enter (.*) as (Name|Phone|Home|Email)$")
    public void placeContactText(String text, String attribute)
    {
        contactPage.getContactText(text, attribute).sendKeys(text);
    }

    @Then("^(.*) is set to (.*)$")
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
            case "Favorites":
                // required to go to home page to check if contact is under contacts list.
                contactPage.resetMobileApplication();
                contactPage = new ContactPage();

                contactPage.getElementByAttributeText("Contacts").click();
                assertTrue(contactPage.getElementByAttributeText(attribute).isSelected());
                if ("All contacts".equals(attribute))
                {
                    assertTrue(contactPage.assertContactIsInContactsList(text));
                }
                else
                {
                    assertEquals(contactPage.getElementUnderFavorites().getText(), text);
                }
                break;
            default:
                throw new IllegalArgumentException("Text: " + text + ", Attribute: " + attribute + " not supported");
        }
    }

    @And("^I change (.*) to (.*)$")
    public void updateContactText(String from, String to)
    {
        contactPage.fetchElementToUpdate(from).sendKeys(to);
    }

    @Given("^I check that there are (.*)$")
    public void noFavorites(String message)
    {
        contactPage.getElementByAttributeText("Contacts").click();
        contactPage.getElementByAttributeText("Favorites").click();
        assertEquals(contactPage.getContactMessage().getText(), message);
    }
}
