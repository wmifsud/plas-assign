package mt.edu.um.pom;

import mt.edu.um.driver.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

/**
 * @author waylon on 06/12/2015.
 */
public class DriverPage
{
    public WebDriver webDriver = Driver.getWebDriver();

    public void waitForTextInElement(WebElement webElement, String text)
    {
        new WebDriverWait(webDriver, 30).until(ExpectedConditions.textToBePresentInElement(webElement, text));
    }

    public void waitForElement(WebElement webElement)
    {
        new WebDriverWait(webDriver, 30).until(ExpectedConditions.elementToBeClickable(webElement));
    }

    public void waitForElementVisibility(WebElement webElement)
    {
        new WebDriverWait(webDriver, 30).until(ExpectedConditions.visibilityOf(webElement));
    }

    public List<WebElement> getWebElementList(String retrieveElementsByClasses)
    {
        return webDriver.findElements(By.className(retrieveElementsByClasses));
    }

    public List<WebElement> getDeleteButtons(String listName)
    {
        waitForElement(webDriver.findElement(By.id("gwt-debug-Sidebar-newNoteButton-container")));
        WebElement webElement;
        if (listName.equals("notes"))
        {
            webElement = webDriver.findElement(By.className("NotesView-ScrollWindow"));
        }
        else
        {
            webElement = webDriver.findElement(By.id("gwt-debug-notebooksDrawerSlidingPanel"));
        }
        return webElement.findElements(By.className("qa-deleteButton"));
    }

    public void hoverOn(WebElement webElement)
    {
        Actions action = new Actions(webDriver);
        action.moveToElement(webElement).build().perform();
    }

    public WebElement getConfirmationButton()
    {
        return webDriver.findElement(By.id("gwt-debug-ConfirmationDialog-confirm"));
    }

    public void delay()
    {
        try
        {
            Thread.sleep(2000);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
    }
}
