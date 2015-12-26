package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by waylon on 26/12/2015.
 */
public class TagPage extends NotePage
{
    public WebElement getCreateTag()
    {
        return webDriver.findElement(By.id("gwt-debug-NoteTagsView-tagInputBox"));
    }
}
