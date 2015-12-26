package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.TestCase;
import mt.edu.um.pom.NotePage;

import static junit.framework.TestCase.assertTrue;
import static junit.framework.TestCase.assertEquals;

//import org.openqa.selenium.WebElement;

/**
 * Created by waylon on 06/12/2015.
 */
public class Note
{
    NotePage notePage = new NotePage();

    @Given("I create (\\d) note with title as (.*) and body as (.*)")
    public void createNewNote(int count, String title, String body)
    {
        notePage.waitForElement(notePage.getNewNoteButton());
        for (int i = 1; i <= count; i++)
        {
            notePage.getNewNoteButton().click();

            notePage.getNoteMessage().click();
            notePage.getNoteMessage().sendKeys(body);

            notePage.getNoteTitle().click();

            if (count > 1)
            {
                notePage.getNoteTitle().sendKeys(i + " " + title);
            }
            else
            {
                notePage.getNoteTitle().sendKeys(title);
            }

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
        NotePage.Table table = notePage.retrieveTable();

        assertEquals(row, table.getRowCount());
        assertEquals(column, table.getColumnCount());
    }

    @And("^I select the (.*) sort order")
    public void selectSortMethodOption(String sortMethod)
    {
        notePage.getSortOption(sortMethod).click();
    }

    @Then("^the sort order should be (Date Created|Title) in (.*) sort order$")
    public void assertSortingIsCorrect(String parameter, String order) throws InterruptedException
    {
        assertTrue(notePage.assertSortMethod(parameter, order));
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