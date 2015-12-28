package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import mt.edu.um.pom.ButtonPage;
import mt.edu.um.pom.DriverPage;

/**
 * @author waylon on 08/12/2015.
 */
public class Button extends DriverPage
{
    ButtonPage buttonPage = new ButtonPage();

    @And("^I click the (.*) button$")
    public void buttonClick(String buttonName)
    {
        switch (buttonName)
        {
            case "notes":
                buttonPage.getNotesButton().click();
                waitForTextInElement(buttonPage.getNotesTitle(), "NOTES");
                break;
            case "sign up":
                buttonPage.getSignUpButton().click();
                break;
            case "table":
                buttonPage.getOverflowButton().click();
                buttonPage.getTableButton().click();
                break;
            case "notebook":
                buttonPage.getNoteBookButton().click();
                break;
            case "add to shortcut":
                buttonPage.getAddToShortcutButton().click();
                break;
            case "shortcuts":
                buttonPage.getShortcutsButton().click();
                break;
            case "options":
                buttonPage.getOptionsButton().click();
                break;
            case "create new notebook":
                buttonPage.getCreateNoteBookButton().click();
                break;
            case "confirm create notebook":
                buttonPage.getConfirmCreateNoteBookButton().click();
                break;
            case "search":
                buttonPage.getSearchButton().click();
                break;
            case "trash":
                buttonPage.getTrashButton().click();
                break;
            case "empty trash":
                delay();
                if (!buttonPage.getNotesCount().getText().startsWith("0"))
                {
                    buttonPage.getEmptyTrashButton().click();
                    buttonPage.getConfirmationButton().click();
                    waitForTextInElement(buttonPage.getNotesCount(), "0 notes");
                    delay();
                }
                break;
            case "tag":
                buttonPage.getTagButton().click();
                break;
            default:
                throw new IllegalArgumentException("Button not supported: " + buttonName);

        }
    }
}
