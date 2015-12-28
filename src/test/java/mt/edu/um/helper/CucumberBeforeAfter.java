package mt.edu.um.helper;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import mt.edu.um.driver.Driver;
import mt.edu.um.pom.LoginPage;
import mt.edu.um.pom.NotePage;
import org.openqa.selenium.By;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class CucumberBeforeAfter
{
    private static boolean imagesCleaned = false;

    LoginPage loginPage = null;
    NotePage notePage = null;

    // This ensures that this @Before is always executed first
    @Before(order = 0)
    public void setup()
    {
        // Delete all screen shots from previous execution
        // THIS SHOULD BE EXECUTED ONLY ONCE
        if (!imagesCleaned)
        {
            File reportsDirectory = new File("reports/html-reports");
            final File[] files = reportsDirectory.listFiles((dir, name) -> {
                return name.matches(".*.jpeg");
            });
            for (final File file : files)
            {
                file.delete();
            }
            imagesCleaned = true;
        }

        Driver.setBrowser(System.getProperty("browser"));
        Driver.startWebDriver();
        loginPage = new LoginPage();
        notePage = new NotePage();
    }

    // This ensures that this @After is always executed last
    @After(order = 0)
    public void tearDown(Scenario scenario)
    {
        // If Cucumber scenario fails, output time of failure and take screen shot
        if (scenario.isFailed())
        {
            DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
            scenario.write("Time of failure: " + dateFormat.format(Calendar.getInstance().getTime()));
            DriverScreenShotHelper.takeScreenShot(scenario);
        }

        if (Driver.getWebDriver() != null)
        {
            Driver.getWebDriver().quit();
            Driver.nullWebDriver();
        }
    }

    @After(value = "@note,@search,@5b,@tag")
    public void removeNotes()
    {
        System.out.println("Removing created notes");
        Driver.getWebDriver().get("https://evernote.com");
        loginPage.getSignInButton().click();
        notePage.waitForElement(Driver.getWebDriver().findElement(By.className("NotesView-ScrollWindow")));

        notePage.deleteAllNotes();

        loginPage.logout();
        System.out.println("Removal of notes complete");
    }
}
