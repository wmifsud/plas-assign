package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.TestCase;
import mt.edu.um.pom.NotePage;

import static junit.framework.TestCase.assertTrue;
import static junit.framework.TestCase.assertEquals;

/**
 * @author waylon on 06/12/2015.
 */
public class Note
{
    NotePage notePage = new NotePage();

    @Given("^I create (\\d) note with title as (.*) and body as (.*)$")
    public void createNewNote(int count, String title, String body)
    {
        for (int i = 1; i <= count; i++)
        {
            notePage.waitForElement(notePage.getNewNoteButton());
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

    @Then("^the (.*) is in the (notes|shortcuts) list$")
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

    @And("^I select the (.*) sort order$")
    public void selectSortMethodOption(String sortMethod) throws InterruptedException
    {
        notePage.getSortOption(sortMethod).click();
        Thread.sleep(2000);
    }

    @Then("^the sort order should be (Date Created|Title) in (.*) sort order$")
    public void assertSortingIsCorrect(String parameter, String order) throws InterruptedException
    {
        assertTrue(notePage.assertSortMethod(parameter, order));
    }
}