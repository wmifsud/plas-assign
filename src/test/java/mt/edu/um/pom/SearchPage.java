package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by waylon on 23/12/2015.
 */
public class SearchPage extends DriverPage
{
    public WebElement getSearchBox()
    {
        return webDriver.findElement(By.id("gwt-debug-searchViewSearchBox"));
    }
}
