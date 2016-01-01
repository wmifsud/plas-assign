package mt.edu.um.pom;

import mt.edu.um.driver.MobileDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * @author waylon on 30/12/2015.
 */
public class ContactPage extends MobileDriverPage
{
    public WebElement getCreateContactIcon()
    {
        WebElement webElement = mobileDriver.findElement(By.id("com.android.contacts:id/floating_action_button"));;
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getContactText(String text, String attribute)
    {
        delay();
        if ("Phone".equals(attribute) || "Home".equals(attribute))
        {
            try
            {
                Long.valueOf(text);
            }
            catch (NumberFormatException e)
            {
                e.printStackTrace();
                throw new IllegalArgumentException(attribute + " can only contain digits");
            }
        }
        return mobileDriver.findElement(By.xpath("//android.widget.EditText[@text='" + attribute + "']"));
    }

    public WebElement getNavigateUpIcon()
    {
        WebElement navigateUpElement = mobileDriver.findElement(By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']"));
        waitForElement(navigateUpElement);
        return navigateUpElement;
    }

    public WebElement getLargeTitle()
    {
        delay();
        return mobileDriver.findElement(By.id("com.android.contacts:id/large_title"));
    }

    private WebElement getHeaderFromInfo(WebElement info)
    {
        return info.findElement(By.id("com.android.contacts:id/header"));
    }

    private WebElement getTextFromInfo(WebElement info)
    {
        return info.findElement(By.id("com.android.contacts:id/text"));
    }

    public boolean assertTextIsUnderAttribute(String text, String attribute)
    {
        for (WebElement info : mobileDriver.findElements(By.xpath("//android.widget.RelativeLayout")))
        {
            if (text.equals(getHeaderFromInfo(info).getText()) && attribute.equals(getTextFromInfo(info).getText()))
            {
                return true;
            }
        }
        System.out.println("Unable to find " + text + " under " + attribute);
        return false;
    }

    public boolean assertContactIsInContactsList(String text)
    {
        for (WebElement contact : getContactList())
        {
            if (text.equals(contact.getText()))
            {
                return true;
            }
        }
        System.out.println(text + " not found in contacts list!");
        return false;
    }

    private List<WebElement> getContactList()
    {
        return mobileDriver.findElements(By.id("com.android.contacts:id/cliv_name_textview"));
    }

    public WebElement getMoreOptionsImage()
    {
        return mobileDriver.findElement(By.xpath("//android.widget.ImageButton[@content-desc='More options']"));
    }

    public WebElement getDeleteButton()
    {
        return mobileDriver.findElement(By.xpath("//android.widget.TextView[@text='Delete']"));
    }

    public WebElement getConfirmButton()
    {
        return mobileDriver.findElement(By.xpath("//android.widget.Button[@text='OK']"));
    }

    public WebElement getElementByAttributeText(String attributeText)
    {
        WebElement webElement = mobileDriver.findElement(By.xpath("//android.widget.TextView[@text='" + attributeText + "']"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getContact(String name)
    {
        for (WebElement contact : getContactList())
        {
            if (name.equals(contact.getText()))
            {
                return contact;
            }
        }
        throw new IllegalArgumentException("Unable to find Contact with name: " + name);
    }

    public WebElement getEditIcon()
    {
        WebElement editIcon = mobileDriver.findElement(By.id("com.android.contacts:id/menu_edit"));
        waitForElement(editIcon);
        return editIcon;
    }

    private List<WebElement> getEditElements()
    {
        return mobileDriver.findElements(By.xpath("//android.widget.EditText"));
    }

    public WebElement fetchElementToUpdate(String toUpdate)
    {
        for (WebElement editElement : getEditElements())
        {
            if (toUpdate.equals(editElement.getText()))
            {
                return editElement;
            }
        }
        throw new IllegalArgumentException("Unable to fine edit element with text: " + toUpdate);
    }

    public WebElement getContactMessage()
    {
        WebElement webElement = mobileDriver.findElement(By.id("com.android.contacts:id/message"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getFavoritesIcon()
    {
        WebElement webElement = mobileDriver.findElement(By.id("com.android.contacts:id/menu_star"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getElementUnderFavorites()
    {
        WebElement webElement = mobileDriver.findElement(By.id("com.android.contacts:id/contact_tile_name"));
        waitForElement(webElement);
        return webElement;
    }

    public void deleteContacts()
    {
        WebElement contact;
        getElementByAttributeText("Contacts").click();
        do
        {
            if (getContactList().stream().findFirst().isPresent())
            {
                contact = getContactList().stream().findFirst().get();
                waitForElement(contact);
                contact.click();
                getMoreOptionsImage().click();
                getDeleteButton().click();
                getConfirmButton().click();
            }
        } while (!getContactList().isEmpty());
    }

    public void resetMobileApplication()
    {
        MobileDriver.getAndroidDriver().quit();
        MobileDriver.nullAndroidDriver();
        MobileDriver.startAndroidDriver();
    }
}
