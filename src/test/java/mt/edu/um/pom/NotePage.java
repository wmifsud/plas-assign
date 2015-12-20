package mt.edu.um.pom;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import com.gargoylesoftware.htmlunit.javascript.host.Map;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

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
        return webDriver.findElement(By.id("gwt-debug-CreateNotebookDialog-centeredTextBox-textBox"));
    }

    public void createTable(int column, int row)
    {
        List<WebElement> divElements = webDriver.findElement(By.id("gwt-debug-MetaBarView-root")).findElements(By.tagName("div"));
        HashMap<String, Integer> hash = new HashMap<>();
        int counter;
        for (WebElement divElement : divElements)
        {
            if (divElement.getAttribute("class") != null && "".equals(divElement.getText()))
            {
                if (hash.get(divElement.getAttribute("class")) == null)
                {
                    hash.put(divElement.getAttribute("class"), 1);
                }
                else
                {
                    counter = hash.get(divElement.getAttribute("class")) + 1;
                    hash.remove(divElement.getAttribute("class"));
                    hash.put(divElement.getAttribute("class"), counter);
                }
            }
        }

        String rowClass = null;
        String columnClass = null;
        for (java.util.Map.Entry<String, Integer> entry : hash.entrySet())
        {
            if (entry.getValue().equals(36))
            {
                rowClass = entry.getKey();
                break;
            }
        }

        if (rowClass == null)
        {
            throw new ElementNotFoundException("div", "table", "cell");
        }


        columnClass = webDriver.findElement(By.className(rowClass)).findElement(By.xpath("..")).getAttribute("class");

        if (!hash.get(columnClass).equals(6))
        {
            throw new ElementNotFoundException("div", "table", "cell");
        }

        webDriver.findElements(By.className(columnClass)).get(row-1).findElements(By.className(rowClass)).get(column-1).click();
    }

    public List<WebElement> getTableRows()
    {
        WebElement webElement = webDriver.findElement(By.id("EN_IframePanel_0"));
//        try
//        {
//            webElement = getNoteMessage();
//        }
//        catch (NoSuchElementException | ElementNotVisibleException e)
//        {
//            webElement = webDriver.findElement(By.id("EN_IframePanel_0"));
//        }
//        ;
        return webDriver.switchTo().frame(webElement).findElements(By.tagName("tr"));
    }

    public int getTableColumns(List<WebElement> rowElements)
    {
        return rowElements.stream().findFirst().get().findElements(By.tagName("td")).size();
    }

}
