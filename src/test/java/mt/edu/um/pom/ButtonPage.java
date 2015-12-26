package mt.edu.um.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

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

    public WebElement getTableButton()
    {
        return webDriver.findElement(By.id("gwt-debug-FormattingBar-tableButton"));
    }

    public WebElement getOptionsButton()
    {
        return webDriver.findElement(By.className("focus-NotesView-Subheader-OptionsButton"));
    }

    public WebElement getSearchButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-searchButton-container"));
    }

    public WebElement getTrashButton()
    {
        return webDriver.findElement(By.className("qa-trash"));
    }

    public WebElement getTrashHeader()
    {
        return webDriver.findElement(By.id("gwt-debug-trashHeaderContainer"));
    }

    public WebElement getEmptyTrashButton()
    {
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
}
