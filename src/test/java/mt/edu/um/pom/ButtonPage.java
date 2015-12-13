package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by waylon on 08/12/2015.
 */
public class ButtonPage extends DriverPage
{
    public WebElement getSignUpButton()
    {
        return webDriver.findElement(By.id("login"));
    }

    public WebElement getNoteBookButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-notebooksButton-container"));
    }

    public WebElement getCreateNoteBookButton()
    {
        return webDriver.findElement(By.id("gwt-debug-NotebooksDrawer-createNotebookButton"));
    }

    public WebElement getConfirmCreateNoteBookButton()
    {
        return webDriver.findElement(By.id("gwt-debug-CreateNotebookDialog-confirm"));
    }

    public WebElement getConfirmationButton()
    {
        return webDriver.findElement(By.id("gwt-debug-ConfirmationDialog-confirm"));
    }

    public WebElement getAddToShortcutButton()
    {
        return webDriver.findElement(By.id("gwt-debug-NoteAttributes-shortcutButton"));
    }

    public WebElement getShortcutsButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-shortcutsButton-container"));
    }
}
