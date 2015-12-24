package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import mt.edu.um.pom.NotebookPage;
import org.openqa.selenium.Keys;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;

/**
 * Created by waylon on 23/12/2015.
 */
public class Notebook
{
    NotebookPage notebookPage = new NotebookPage();

    @And("^I set the notebook title as (.*)$")
    public void inputSearchBox(String notebookTitle)
    {
        notebookPage.getNotebookBox().sendKeys(notebookTitle);
        notebookPage.getNotebookBox().sendKeys(Keys.RETURN);
        notebookPage.waitForElement(notebookPage.getNotebookHeader());
    }

    @Then("^(.*) note is under the (.*) notebook$")
    public void assertNoteLinkedToNotebook(String note, String notebook)
    {
        notebookPage.getNoteTitle().click();
        assertEquals(notebookPage.getNotebookHeading().getText(), notebook);
        assertTrue(notebookPage.isTitleInList(note, "notes"));
    }

    @And(("^delete (.*) notebook$"))
    public void deleteNotebook(String notebook)
    {
        notebookPage.waitForElement(notebookPage.getNoteBookButton());
        notebookPage.getNoteBookButton().click();

        notebookPage.deleteNotebook(notebook);
    }
}
