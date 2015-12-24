package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

/**
 * Created by waylon on 24/12/2015.
 */
public class TrashPage extends NotePage
{
    public void deleteAllNotes()
    {
        getWebElementList("NotesView-ScrollWindow", "qa-title");

        List<WebElement> deleteElements;
        do
        {
            deleteElements = getDeleteButtons();
            deleteElements.stream().findFirst().get().click();
            getConfirmationButton().click();
        } while (deleteElements.size() > 1);
    }

    public void emptyTrashCan()
    {
        List<WebElement> buttonElements;
        List<WebElement> webElementList = webDriver.findElements(By.className("focus-NotesView-Note-noteTitle"));
        System.out.println("TRASH ELEMENTS: " + webElementList.size());
        for (WebElement webElement : webElementList)
        {
            hoverOn(webElement);
            buttonElements = webDriver.findElements(By.className("focus-NotesView-Note-hoverButton"));
            for (WebElement buttonElement : buttonElements)
            {
//                if (webElement.isDisplayed() && webElement.getText().equals())
//                {
//
//                }
            }
            if (webElement.getText().equals("Erase"))
            {
                webElement.click();
            }
        }
    }
}
