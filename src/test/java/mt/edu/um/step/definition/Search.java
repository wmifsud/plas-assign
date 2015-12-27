package mt.edu.um.step.definition;

import cucumber.api.java.en.And;
import mt.edu.um.pom.SearchPage;
import org.openqa.selenium.Keys;

/**
 * @author waylon on 23/12/2015.
 */
public class Search
{
    SearchPage searchPage = new SearchPage();

    @And("^I search for (.*)$")
    public void inputSearchBox(String searchText)
    {
        searchPage.getSearchBox().sendKeys(searchText);
        searchPage.getSearchBox().sendKeys(Keys.RETURN);
    }
}
