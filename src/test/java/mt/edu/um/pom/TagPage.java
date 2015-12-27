package mt.edu.um.pom;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

/**
 * @author waylon on 26/12/2015.
 */
public class TagPage extends NotePage
{
    public WebElement getCreateTag()
    {
        return webDriver.findElement(By.id("gwt-debug-NoteTagsView-tagInputBox"));
    }

    public void assignTagToNote(String tagName, String noteTitle) throws InterruptedException
    {
        waitForElement(webDriver.findElement(By.className("NotesView-ScrollWindow")));
        List<WebElement> noteList = getWebElementList("focus-NotesView-Note");

        for (WebElement note : noteList)
        {
            System.out.println("NOTE TITLE: " + note);
            if (note.findElement(By.className("qa-title")).getText().equals(noteTitle))
            {
                note.click();
                Thread.sleep(2000);
                getCreateTag().click();
                waitForElementVisibility(getCreateTag().findElement(By.id("gwt-debug-NoteTagsView-tagInputBox-lozengeInput-lozengeTextBox")));
                new Actions(webDriver).sendKeys(tagName).perform();
                break;
            }
        }
    }

    public WebElement selectTag(String tagName)
    {
        waitForElement(webDriver.findElement(By.className("focus-drawer-TagsDrawer-TagsList-tags-container")));
        List<WebElement> tagList = getWebElementList("focus-drawer-TagsDrawer-TagSelectable-name");

        for (WebElement tag : tagList)
        {
            System.out.println(tag.getText());
            if (tagName.equals(tag.getText()))
            {
                return tag;
            }
        }

        throw new ElementNotFoundException("Tag not found", "focus-drawer-TagsDrawer-TagSelectable-name", tagName);
    }

    public WebElement getDeleteTag()
    {
        return webDriver.findElement(By.className("focus-drawer-TagsDrawer-TagSelectable-delete-icon"));
    }
}
