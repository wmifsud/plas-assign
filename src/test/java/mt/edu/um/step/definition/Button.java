package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import mt.edu.um.pom.ButtonPage;
import mt.edu.um.pom.DriverPage;

/**
 * Created by waylon on 08/12/2015.
 */
public class Button extends DriverPage
{
    ButtonPage buttonPage = new ButtonPage();

    @And("^I click the (.*) button")
    public void buttonClick(String buttonName)
    {
        switch (buttonName)
        {
            case "sign up":
                buttonPage.getSignUpButton().click();
                break;
            case "table":
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
            default:
                throw new IllegalArgumentException("Button not supported: " + buttonName);

        }
    }
}
