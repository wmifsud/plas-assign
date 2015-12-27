package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import mt.edu.um.pom.ButtonPage;
import mt.edu.um.pom.TrashPage;

import static junit.framework.TestCase.assertTrue;

/**
 * @author waylon on 24/12/2015.
 */
public class Trash extends ButtonPage
{
    TrashPage trashPage = new TrashPage();

    @And("^I delete all notes$")
    public void deleteAllNotes()
    {
        trashPage.deleteAllNotes();
        getNoteBookButton();
    }

    @And("^I empty the trash can$")
    public void emptyTrashCan()
    {
        trashPage.emptyTrashCan();
    }

    @Then("^the trash is empty$")
    public void assertTrashEmpty()
    {
        assertTrue(trashPage.getNotesCount().getText().startsWith("0"));
    }

    @And("^I restore (.*)$")
    public void restoreNote(String noteTitle)
    {
        trashPage.restoreNote(noteTitle);
    }
}
