package mt.edu.um.pom;

import mt.edu.um.driver.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by waylon on 06/12/2015.
 */
public class DriverPage
{
    public WebDriver webDriver = Driver.getWebDriver();

    public void waitForTextInElement(WebElement webElement, String text)
    {
        new WebDriverWait(Driver.getWebDriver(), 30).until(ExpectedConditions.textToBePresentInElement(webElement, text));
    }

    public void waitForElement(WebElement webElement)
    {
        new WebDriverWait(Driver.getWebDriver(), 30).until(ExpectedConditions.elementToBeClickable(webElement));
    }
}
