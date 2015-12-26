package mt.edu.um.step.definition;

import mt.edu.um.pom.TagPage;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Created by waylon on 26/12/2015.
 */
public class Tag
{
    TagPage tagPage = new TagPage();

    public void test()
    {
        List<WebElement> noteList = tagPage.getWebElementList("NotesView-ScrollWindow", "focus-NotesView-Note");
    }
}
