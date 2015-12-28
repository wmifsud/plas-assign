package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * @author waylon on 06/12/2015.
 */
public class LoginPage extends DriverPage
{
    public WebElement getSignInButton()
    {
        return webDriver.findElement(By.className("upgrade-toggle-info")).findElement(By.tagName("a"));
    }

    public WebElement getSignInLink()
    {
        waitForElement(webDriver.findElement(By.className("js-sign-in-menu")));
        return webDriver.findElement(By.className("js-sign-in-menu"));
    }

    public WebElement getHeaderSignInLink()
    {
        WebElement signInLink = null;
        waitForElement(webDriver.findElement(By.className("global-header")));
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

    public WebElement chrome()
    {
        return webDriver.findElement(By.className("js-global-menu-container"));
    }

    public WebElement chrome2()
    {
        List<WebElement> webElementList = webDriver.findElement(By.className("js-global-menu")).findElements(By.tagName("a"));

        for (WebElement webElement : webElementList)
        {
            if (webElement.getAttribute("data-action").equals("sign-in"))
            {
                return webElement;
            }
        }
        throw new ElementNotVisibleException("Element not visible: a");
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
        waitForElement(webDriver.findElement(By.id("gwt-debug-AccountMenu-avatar")));
        return webDriver.findElement(By.id("gwt-debug-AccountMenu-avatar"));
    }

    private WebElement getLogoutLink()
    {
        return webDriver.findElement(By.id("gwt-debug-AccountMenu-logout"));
    }

    public WebElement getPasswordError()
    {
        return webDriver.findElement(By.id("password-wrapper")).findElement(By.className("error-status"));
    }

    public void logout()
    {
        waitForElement(getAccountMenuLink());
        getAccountMenuLink().click();
        getLogoutLink().click();
    }
}
