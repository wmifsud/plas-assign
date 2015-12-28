package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * @author waylon on 08/12/2015.
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
        waitForElement(webDriver.findElement(By.id("gwt-debug-NotebooksDrawer-title")));
        WebElement webElement = webDriver.findElement(By.id("gwt-debug-NotebooksDrawer-createNotebookButton"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getConfirmCreateNoteBookButton()
    {
        return webDriver.findElement(By.id("gwt-debug-CreateNotebookDialog-confirm"));
    }

    public WebElement getAddToShortcutButton()
    {
        return webDriver.findElement(By.id("gwt-debug-NoteAttributes-shortcutButton"));
    }

    public WebElement getShortcutsButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-shortcutsButton-container"));
    }

    public WebElement getTableButton()
    {
        WebElement webElement = webDriver.findElement(By.id("gwt-debug-FormattingBar-tableButton"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getOverflowButton()
    {
        WebElement webElement = webDriver.findElement(By.id("gwt-debug-FormattingBar-overflowButton"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getOptionsButton()
    {
        return webDriver.findElement(By.className("focus-NotesView-Subheader-OptionsButton"));
    }

    public WebElement getSearchButton()
    {
        WebElement webElement = webDriver.findElement(By.id("gwt-debug-Sidebar-searchButton-container"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getTrashButton()
    {
        delay();
        return webDriver.findElement(By.className("qa-trash"));
    }

    public WebElement getTrashHeader()
    {
        WebElement webElement = webDriver.findElement(By.id("gwt-debug-trashHeaderContainer"));
        waitForElement(webElement);
        return webElement;
    }

    public WebElement getEmptyTrashButton()
    {
        delay();
        return getTrashHeader().findElement(By.tagName("button"));
    }

    public WebElement getNotesCount()
    {
        return webDriver.findElement(By.className("qa-notesCount"));
    }

    public WebElement getNotesButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-notesButton-container"));
    }

    public WebElement getNotesTitle()
    {
        return webDriver.findElement(By.id("gwt-debug-NotesHeader-title"));
    }

    public WebElement getTagButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-tagsButton-container"));
    }
}
