package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

/**
 * Created by waylon on 06/12/2015.
 */
public class NotePage extends ButtonPage
{
    public WebElement getDoneButton()
    {
        WebElement doneButton = webDriver.findElement(By.id("gwt-debug-NoteAttributes-doneButton"));
        waitForTextInElement(doneButton, "Done");
        return doneButton;
    }

    public WebElement getNewNoteButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-newNoteButton-container"));
    }

    public WebElement getNoteTitle()
    {
        return webDriver.findElement(By.id("gwt-debug-NoteTitleView-textBox"));
    }

//    public WebElement getNoteBody()
//    {
//        return webDriver.findElement(By.id("gwt-debug-NoteContentEditorView-root"));
//    }

    public WebElement getNoteMessage()
    {
        return webDriver.findElement(By.id("entinymce_170_ifr"));
    }

    public List<WebElement> getWebElementList(String waitForClassName, String retrieveElementsByClasses)
    {
        waitForElement(webDriver.findElement(By.className(waitForClassName)));
        return webDriver.findElements(By.className(retrieveElementsByClasses));
    }

    public List<WebElement> getDeleteButtons()
    {
        waitForElement(webDriver.findElement(By.id("gwt-debug-Sidebar-newNoteButton-container")));
        return webDriver.findElements(By.className("qa-deleteButton"));
    }

    public boolean isTitleInList(String noteTitle, String listName)
    {
        boolean containsUntitled = true;
        List<WebElement> webElementList = null;
        while (containsUntitled)
        {
            if ("notes".equals(listName))
            {
                webElementList = getWebElementList("NotesView-ScrollWindow", "qa-title");
            }
            else
            {
                webElementList = getWebElementList("dragdrop-dropTarget", "qa-name");
            }
            for (WebElement webElement : webElementList)
            {
                if (webElement.getText().equals("Untitled"))
                {
                    containsUntitled = true;
                    break;
                }
                else
                {
                    containsUntitled = false;
                }
            }
        }

        for (WebElement webElement : webElementList)
        {
            System.out.println("TEXT OF ELEMENT: "+webElement.getText());
            if (noteTitle.equals(webElement.getText()))
            {
                return true;
            }
        }
        return false;
    }

    public WebElement getNoteBookTitle()
    {
        //waitForElement("gwt-debug-NoteAttributes-doneButton");
        return webDriver.findElement(By.id("gwt-debug-CreateNotebookDialog-centeredTextBox-textBox"));
    }

    public void createTable(int column, int row)
    {
        webDriver.findElement(By.className("GNTMVRYAG"))
                .findElements(By.className("GNTMVRYDN"))
                .get(column-1)
                .findElements(By.tagName(("div")))
                .get(row-1)
                .click();
    }

    public int getTableColumns()
    {
//        waitForElement(webDriver.findElement(By.tagName("table")));
        return webDriver.findElement(By.tagName("table")).findElements(By.tagName("td")).size()+1;
    }

    public int getTableRows()
    {
//        waitForElement(webDriver.findElement(By.tagName("table")));
        return webDriver.findElement(By.tagName("table")).findElements(By.tagName("tr")).size()+1;
    }

}
