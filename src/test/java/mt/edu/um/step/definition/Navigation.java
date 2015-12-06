package mt.edu.um.step.definition;

import cucumber.api.java.en.Given;
import mt.edu.um.pom.DriverPage;

/**
 * Created by waylon on 06/12/2015.
 */
public class Navigation extends DriverPage
{
    @Given("^I navigate to (.*)$")
    public void iNavigateTo(String site)
    {
        webDriver.get(site);
    }
}
