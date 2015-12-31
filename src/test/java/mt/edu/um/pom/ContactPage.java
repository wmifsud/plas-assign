package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by waylon on 30/12/2015.
 */
public class ContactPage extends AndroidDriverPage
{
    public WebElement getCreateContactIcon()
    {
        return mobileDriver.findElement(By.id("com.android.contacts:id/floating_action_button"));
    }

    public WebElement getContactTextByParam(String param)
    {
        delay();
        return mobileDriver.findElement(By.xpath("//android.widget.EditText[@text='" + param + "']"));
    }

    public WebElement getNavigateUpIcon()
    {
        delay();
        return mobileDriver.findElement(By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']"));
    }

    public WebElement getLargeTitle()
    {
        return mobileDriver.findElement(By.id("com.android.contacts:id/large_title"));
    }
}
