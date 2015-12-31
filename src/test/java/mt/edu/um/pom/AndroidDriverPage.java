package mt.edu.um.pom;

import io.appium.java_client.android.AndroidDriver;
import mt.edu.um.driver.MobileDriver;

/**
 * Created by waylon on 30/12/2015.
 */
public class AndroidDriverPage
{
    public AndroidDriver mobileDriver = MobileDriver.getAndroidDriver();

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
