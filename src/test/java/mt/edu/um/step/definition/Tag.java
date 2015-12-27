package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import mt.edu.um.pom.NotePage;
import mt.edu.um.pom.TagPage;
import org.openqa.selenium.By;

/**
 * @author waylon on 26/12/2015.
 */
public class Tag extends NotePage
{
    TagPage tagPage = new TagPage();

    @And("^I assign (.*) to (.*)$")
    public void assignTagToNote(String tagName, String noteTitle) throws InterruptedException
    {
        tagPage.assignTagToNote(tagName, noteTitle);
    }

    @And("^I click on (.*) from the tag menu$")
    public void selectTag(String tagName)
    {
        tagPage.selectTag(tagName).click();
        waitForElement(webDriver.findElement(By.className("NotesView-ScrollWindow")));
    }

    @And("^I delete tag named (.*)$")
    public void deleteTag(String tagName)
    {
        hoverOn(tagPage.selectTag(tagName));
        tagPage.getDeleteTag().click();
        tagPage.getConfirmationButton().click();
    }
}
