package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import mt.edu.um.pom.TrashPage;

/**
 * Created by waylon on 24/12/2015.
 */
public class Trash
{
    TrashPage trashPage = new TrashPage();

    @And("^I delete all notes$")
    public void deleteAllNotes()
    {
        trashPage.deleteAllNotes();
        trashPage.getNoteBookButton();
    }

    @And("^I empty the trash can$")
    public void emptyTrashCan()
    {
        trashPage.emptyTrashCan();
    }
}
