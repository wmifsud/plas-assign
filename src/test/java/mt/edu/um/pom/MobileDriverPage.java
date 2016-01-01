package mt.edu.um.pom;

import io.appium.java_client.android.AndroidDriver;
import mt.edu.um.driver.MobileDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by waylon on 30/12/2015.
 */
public class MobileDriverPage
{
    public AndroidDriver mobileDriver = MobileDriver.getAndroidDriver();

    public void waitForElement(WebElement webElement)
    {
        new WebDriverWait(mobileDriver, 30).until(ExpectedConditions.elementToBeClickable(webElement));
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
