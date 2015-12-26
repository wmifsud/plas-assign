package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import mt.edu.um.pom.TrashPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static junit.framework.TestCase.assertTrue;

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

    @Then("^the trash is empty$")
    public void assertTrashEmpty()
    {
        assertTrue(trashPage.getNotesCount().getText().startsWith("0"));
    }

    @And("^I restore (.*)$")
    public void restoreNote(String noteTitle)
    {
        trashPage.waitForElement(trashPage.getTrashHeader());
        List<WebElement> noteList = trashPage.getWebElementList("NotesView-ScrollWindow", "focus-NotesView-Note");

        for (WebElement note : noteList)
        {
            System.out.println("NOTE TITLE: " + note);
            if (note.findElement(By.className("qa-title")).getText().equals(noteTitle))
            {
                trashPage.hoverOn(note);
                for (WebElement button : note.findElements(By.tagName("button")))
                {
                    System.out.println("BUTTON TEXT: " + button.getText());
                    if ("Restore".equals(button.getText()))
                    {
                        button.click();
                        trashPage.waitForTextInElement(trashPage.getNotesCount(),"0 notes");
                        break;
                    }
                }
                break;
            }
        }
    }
}
