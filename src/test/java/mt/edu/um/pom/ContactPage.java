package mt.edu.um.pom;

import mt.edu.um.driver.MobileDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * @author waylon on 30/12/2015.
 */
public class ContactPage extends MobileDriverPage
{
    public WebElement getCreateContactIcon()
    {
        return mobileDriver.findElement(By.id("com.android.contacts:id/floating_action_button"));
    }

    public WebElement getContactText(String text, String attribute)
    {
        if ("Phone".equals(attribute) || "Home".equals(attribute))
        {
            try
            {
                delay();
                System.out.println(Long.valueOf(text));
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
        return false;
    }

    public void test()
    {
        MobileDriver.getAndroidDriver().quit();
        MobileDriver.nullAndroidDriver();
        MobileDriver.startAndroidDriver();
//        WebElement webElement = mobileDriver.findElement(By.id("com.android.contacts:id/photo_touch_intercept_overlay"));
//        webElement.sendKeys(Keys.ESCAPE);
//        delay();
    }

    public void deleteContacts()
    {
        getContactsIcon().click();
        System.out.println(mobileDriver.findElements(By.id("com.android.contacts:id/cliv_name_textview")).size());
        do
        {
            waitForElement(mobileDriver.findElements(By.id("com.android.contacts:id/cliv_name_textview")).stream().findFirst().get());
            mobileDriver.findElements(By.id("com.android.contacts:id/cliv_name_textview")).stream().findFirst().get().click();
            getMoreOptionsImage().click();
            getDeleteButton().click();
            getConfirmButton().click();
        } while (mobileDriver.findElements(By.id("com.android.contacts:id/cliv_name_textview")).size() > 0);
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

    public WebElement getContactsIcon()
    {
        return mobileDriver.findElement(By.xpath("//android.widget.TextView[@text='Contacts']"));
    }
}
