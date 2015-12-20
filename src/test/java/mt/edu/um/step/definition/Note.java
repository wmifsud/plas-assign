package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.TestCase;
import mt.edu.um.driver.Driver;
import mt.edu.um.pom.ButtonPage;
import mt.edu.um.pom.LoginPage;
import mt.edu.um.pom.NotePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

/**
 * Created by waylon on 06/12/2015.
 */
public class Note
{
    NotePage notePage = new NotePage();

    @Given("I create (\\d) note with title as (.*) and body as (.*)")
    public void createNewNote(int count, String title, String body)
    {
        for (int i = 1; i <= count; i++)
        {
            notePage.getNewNoteButton().click();

            notePage.getNoteMessage().click();
            notePage.getNoteMessage().sendKeys(body);

            notePage.getNoteTitle().click();
            notePage.getNoteTitle().sendKeys(i + " " + title);

            notePage.getDoneButton().click();

            notePage.getNoteMessage().click();
        }
    }

//    @And("I set the (title|body|notebook title) as (.*)")
//    public void setNoteSection(String noteSection, String message)
//    {
//        switch (noteSection)
//        {
//            case "title":
//
//                break;
//            case "body":
//
//                break;
//            case "notebook title":
//                notePage.getNoteBookTitle().sendKeys(message);
//                break;
//            default:
//                throw new IllegalArgumentException("Only title|body|notebook title allowed for noteSection: " + noteSection);
//        }
//    }

    @Then("the (.*) is in the (notes|shortcuts) list")
    public void assertNoteCreated(String noteTitle, String listName)
    {
        if (!notePage.isTitleInList(noteTitle, listName))
        {
            TestCase.fail(String.join(" ", noteTitle, "is not in the notes list"));
        }
    }

    @And("^I create a (\\d)x(\\d) table$")
    public void createTable(int column, int row)
    {
        notePage.createTable(column, row);
    }

    @Then("^the (\\d)x(\\d) table is created$")
    public void assertTableCreation(int column, int row)
    {
        List<WebElement> rowElements = notePage.getTableRows();
        assertEquals(row, rowElements.size());
        assertEquals(column, notePage.getTableColumns(rowElements));
    }

//    @Given("^I want to delete notebook$")
//    public void delete()
//    {
//        System.out.println("Newly created notebook is being removed...");
//        Driver.getWebDriver().get("https://evernote.com");
//        LoginPage loginPage = new LoginPage();
//        ButtonPage buttonPage = new ButtonPage();
//        loginPage.getSignInButton().click();
//        loginPage.getUserNameTextBox().sendKeys("waylonmifsud@gmail.com");
//        loginPage.getPasswordTextBox().sendKeys("3v3rn0t3");
//        buttonPage.getSignUpButton().click();
//        buttonPage.getNoteBookButton().click();
//        List<WebElement> webElementList = Driver.getWebDriver().findElements(By.className("qa-name"));
//        for (WebElement webElement : webElementList)
//        {
//            System.out.println("WEB_ELEMENT_TEXT: " + webElement.getText());
//            if (webElement.getText().equals("test notebook"))
//            {
//                Actions action = new Actions(Driver.getWebDriver());
//                action.moveToElement(webElement).build().perform();
//                List<WebElement> delete = Driver.getWebDriver().findElements(By.className("qa-deleteButton"));
//                for (WebElement deleteElement : delete)
//                {
//                    if (deleteElement.isDisplayed())
//                    {
//                        deleteElement.click();
//                        Driver.getWebDriver().findElement(By.id("gwt-debug-ConfirmationDialog-confirm")).click();
//                    }
//                }
//            }
//        }
//    }
}