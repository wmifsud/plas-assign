package mt.edu.um.helper;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import mt.edu.um.driver.Driver;
import mt.edu.um.pom.LoginPage;
import mt.edu.um.pom.NotePage;
import org.openqa.selenium.WebElement;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

public class CucumberBeforeAfter
{
    private static boolean imagesCleaned = false;
//    private static boolean studentPopulationExecuted = false;

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

    @After(value = "@note,@search,@trash")
    public void removeNotes() throws InterruptedException
    {
        System.out.println("Removing created notes");
        Driver.getWebDriver().get("https://evernote.com");
        loginPage.getSignInButton().click();
        notePage.getWebElementList("NotesView-ScrollWindow", "qa-title");

        List<WebElement> deleteElements;
        do
        {
            deleteElements = notePage.getDeleteButtons();
            if (deleteElements.stream().findFirst().isPresent())
            {
                deleteElements.stream().findFirst().get().click();
                notePage.waitForElement(notePage.getConfirmationButton());
                notePage.getConfirmationButton().click();
            }
        } while (deleteElements.size() > 1);

        loginPage.getAccountMenuLink().click();
        loginPage.getLogoutLink().click();
        System.out.println("Removal of notes complete");
    }

//    @After(value = "@notebook")
//    public void removeNoteBooks() throws InterruptedException
//    {
//        System.out.println("Removing created note books");
//        Driver.getWebDriver().get("https://evernote.com");
//        loginPage.getSignInButton().click();
//        buttonPage.getNoteBookButton().click();
//
//        List<WebElement> deleteElements = notePage.getDeleteButtons();
//        System.out.println(deleteElements.stream().findFirst().get().getText());
//        deleteElements.stream().findFirst().get().click();
//        buttonPage.getConfirmationButton().click();
//
//        loginPage.getAccountMenuLink().click();
//        loginPage.getLogoutLink().click();
//        System.out.println("Removal of note books complete");
//    }



//    @After(order = 1)
//    public void removeNotes()
//    {
//        Runtime.getRuntime().addShutdownHook(new Thread() {
//            @Override
//            public void run() {
//                System.out.println("Removing created notes");
//                Driver.startWebDriver();
//                loginPage = new LoginPage();
//                buttonPage = new ButtonPage();
//                notePage = new NotePage();
//                Driver.getWebDriver().get("https://evernote.com");
//                loginPage.getSignInButton().click();
//                loginPage.getUserNameTextBox().sendKeys("waylonmifsud@gmail.com");
//                loginPage.getPasswordTextBox().sendKeys("3v3rn0t3");
//                buttonPage.getSignUpButton().click();
//                for (WebElement webElement : notePage.getDeleteButtons())
//                {
//                    webElement.click();
//                    buttonPage.getConfirmationButton().click();
//                }
//                loginPage.getAccountMenuLink().click();
//                loginPage.getLogoutLink().click();
//                System.out.println("Removal of notes complete");
//                if (Driver.getWebDriver() != null)
//                {
//                    Driver.getWebDriver().quit();
//                    Driver.nullWebDriver();
//                }
//            }
//        });
//    }

//    @Before(value="@students")
//    public void populateStudentData() {
//        if (!studentPopulationExecuted) {
//            System.out.println("Students are being populated - this only happens once at the beginning of test execution");
//
//            Driver.getWebDriver().get("http://40.127.132.250:8090/course/students.jsp");
//            new StudentsHomePage().clickOnAddLink();
//            StudentsCreationPage studentCreationPage = new StudentsCreationPage();
//            try {
//                try (BufferedReader br = new BufferedReader(new FileReader(new File("testdata/students.csv")))) {
//                    for (String studentData; (studentData = br.readLine()) != null; ) {
//                        String[] studentDataExploded = studentData.split(",");
//                        String firstName = studentDataExploded[0];
//                        String lastName = studentDataExploded[1];
//                        String country = studentDataExploded[2];
//                        String mobile = studentDataExploded[3];
//                        studentCreationPage.createNewUser(firstName, lastName, country, mobile);
//                    }
//                }
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//
//            System.out.println("Student population complete");
//
//            studentPopulationExecuted = true;
//
//            Runtime.getRuntime().addShutdownHook(new Thread() {
//                @Override
//                public void run() {
//                    System.out.println("Students are being deleted - this only happens at the end of test execution");
//                    Driver.startWebDriver();
//                    Driver.getWebDriver().get("http://40.127.132.250:8090/course/students.jsp");
//                    new StudentsHomePage().clickOnListLink();
//                    new StudentsListPage().deleteAllStudents();
//                    System.out.println("Student deletion complete");
//                    if (Driver.getWebDriver() != null) {
//                        Driver.getWebDriver().quit();
//                        Driver.nullWebDriver();
//                    }
//                }
//            });
//        }
//    }
}
