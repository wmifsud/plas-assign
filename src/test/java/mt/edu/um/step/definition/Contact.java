package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import mt.edu.um.pom.ContactPage;

import static org.junit.Assert.assertEquals;

/**
 * Created by waylon on 30/12/2015.
 */
public class Contact
{
    ContactPage contactPage = new ContactPage();

    @Given("I select the (.*) icon")
    public void selectContactIcon(String iconName)
    {
        switch (iconName)
        {
            case "create new contact":
                contactPage.getCreateContactIcon().click();
                break;
            default:
                throw new IllegalArgumentException("Icon not supported: " + iconName);
        }
    }

    @And("I enter (.*) as (Name|Phone|Home|Email)")
    public void placeContactText(String text, String attribute)
    {
        if ("Phone".equals(attribute) || "Home".equals(attribute))
        {
            try
            {
                System.out.println(Long.valueOf(text));
            }
            catch (NumberFormatException e)
            {
                e.printStackTrace();
                throw new IllegalArgumentException(attribute + " can only contain digits");
            }
        }
        contactPage.getContactTextByParam(attribute).sendKeys(text);
    }

    @And("I select the Navigate Up image")
    public void selectImage()
    {
        contactPage.getNavigateUpIcon().click();
    }

    @Then("the (.*) contact is created")
    public void assertions(String contactName)
    {
        contactPage.getLargeTitle().isDisplayed();
        assertEquals(contactPage.getLargeTitle().getText(), contactName);
    }
}
