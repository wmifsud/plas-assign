package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

/**
 * Created by waylon on 23/12/2015.
 */
public class NotebookPage extends NotePage
{
    public WebElement getNotebookHeader()
    {
        return webDriver.findElement(By.id("gwt-debug-NotebookHeader-container"));
    }

    public WebElement getNotebookBox()
    {
        return webDriver.findElement(By.id("gwt-debug-CreateNotebookDialog-centeredTextBox-textBox"));
    }

    public WebElement getNotebookHeading()
    {
        return webDriver.findElement(By.id("gwt-debug-NotebookSelectMenu-notebookName"));
    }

    public void deleteNotebook(String notebook)
    {
        List<WebElement> webElementList = getWebElementList("qa-notebookWidget", "qa-name");

        for (WebElement webElement : webElementList)
        {
            System.out.println(webElement.getText());
            if (webElement.getText().equals(notebook))
            {
                hoverOn(webElement);
                break;
            }
        }

        for(WebElement webElement : getDeleteButtons())
        {
            System.out.println(webElement.getText());
            if (webElement.isDisplayed())
            {
                webElement.click();
                getConfirmationButton().click();
                break;
            }
        }
    }
}
