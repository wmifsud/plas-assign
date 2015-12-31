package mt.edu.um.driver;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.URL;

public class MobileDriver
{
    private static AndroidDriver androidDriver = null;

    private MobileDriver()
    {

    }

    public static AndroidDriver getAndroidDriver()
    {
        if (androidDriver == null)
        {
            throw new IllegalStateException("Android Driver is not initialised!");
        }
        return androidDriver;
    }

    public static void startAndroidDriver()
    {
        // Check whether driver has already been initialised
        if (androidDriver != null)
        {
            throw new IllegalStateException("Android Driver has already been initialised!");
        }
        try
        {
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability("device","Android");

            //mandatory capabilities
            capabilities.setCapability("platformName","Android");
            capabilities.setCapability("platformVersion", "5.1");

            capabilities.setCapability("automationName", "Appium");
            capabilities.setCapability("newCommandTimeout", "30");
            capabilities.setCapability("deviceName", "Android Emulator");
            capabilities.setCapability("deviceReadyTimeout", "30");

            capabilities.setCapability("appPackage", "com.android.contacts");
            capabilities.setCapability("appActivity", ".DialtactsContactsEntryActivity");

            androidDriver =  new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
        }
        catch (Exception e)
        {
            throw new RuntimeException("Failed to initialize Android Driver!", e);
        }
    }

    public static void nullAndroidDriver()
    {
        androidDriver = null;
    }
}
