package mt.edu.um.pom;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Created by waylon on 06/12/2015.
 */
public class LoginPage extends DriverPage
{
    public WebElement getSignInButton()
    {
        return webDriver.findElement(By.className("upgrade-toggle-info")).findElement(By.tagName("a"));
    }

    public WebElement getSignInLink()
    {
        return webDriver.findElement(By.className("js-sign-in-menu"));
    }

    public WebElement getHeaderSignInLink()
    {
        WebElement signInLink = null;
        List<WebElement> webElementList = webDriver.findElement(By.className("global-header")).findElements(By.tagName("a"));

        for (WebElement webElement : webElementList)
        {
            if ("sign-in".equals(webElement.getAttribute("data-action")))
            {
                signInLink = webElement;
                break;
            }
        }

        return signInLink;
    }

    public WebElement getHeaderMenu()
    {
        return webDriver.findElement(By.id("header-menu"));
    }

    public WebElement getUserNameTextBox()
    {
        return webDriver.findElement(By.id("username"));
    }

    public WebElement getPasswordTextBox()
    {
        return webDriver.findElement(By.id("password"));
    }

    public WebElement getAccountMenuLink()
    {
        return webDriver.findElement(By.id("gwt-debug-AccountMenu-avatar"));
    }

    public WebElement getLogoutLink()
    {
        return webDriver.findElement(By.id("gwt-debug-AccountMenu-logout"));
    }

    public WebElement getPasswordError()
    {
        return webDriver.findElement(By.id("password-wrapper")).findElement(By.className("error-status"));
    }
}
