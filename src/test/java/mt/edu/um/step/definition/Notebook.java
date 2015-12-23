package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import mt.edu.um.pom.NotebookPage;
import org.openqa.selenium.Keys;

/**
 * Created by waylon on 23/12/2015.
 */
public class Notebook
{
    NotebookPage notebookPage = new NotebookPage();

    @And("^I set the notebook title as (.*)$")
    public void inputSearchBox(String notebookTitle)
    {
        notebookPage.getNoteBookBox().sendKeys(notebookTitle);
        notebookPage.getNoteBookBox().sendKeys(Keys.RETURN);
    }
}
