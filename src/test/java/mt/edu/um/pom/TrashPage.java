package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * @author waylon on 24/12/2015.
 */
public class TrashPage extends NotePage
{
    public void emptyTrashCan()
    {
        List<WebElement> webElementList = webDriver.findElements(By.className("focus-NotesView-Note-noteTitle"));
        System.out.println("TRASH ELEMENTS: " + webElementList.size());
        for (WebElement webElement : webElementList)
        {
            hoverOn(webElement);
            if (webElement.getText().equals("Erase"))
            {
                webElement.click();
            }
        }
    }

    public WebElement getTrashHeader()
    {
        return webDriver.findElement(By.id("gwt-debug-trashHeaderContainer"));
    }

    public void restoreNote(String noteTitle)
    {
        waitForElement(getTrashHeader());
        waitForElement(webDriver.findElement(By.className("NotesView-ScrollWindow")));
        List<WebElement> noteList = getWebElementList("focus-NotesView-Note");

        for (WebElement note : noteList)
        {
            System.out.println("NOTE TITLE: " + note);
            if (note.findElement(By.className("qa-title")).getText().equals(noteTitle))
            {
                hoverOn(note);
                for (WebElement button : note.findElements(By.tagName("button")))
                {
                    System.out.println("BUTTON TEXT: " + button.getText());
                    if ("Restore".equals(button.getText()))
                    {
                        button.click();
                        waitForTextInElement(getNotesCount(),"0 notes");
                        break;
                    }
                }
                break;
            }
        }
    }
}
