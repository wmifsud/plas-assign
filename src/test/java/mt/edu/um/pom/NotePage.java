package mt.edu.um.pom;

import com.gargoylesoftware.htmlunit.ElementNotFoundException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 * @author waylon on 06/12/2015.
 */
public class NotePage extends DriverPage
{
    public WebElement getNotesCount()
    {
        return webDriver.findElement(By.className("qa-notesCount"));
    }

    public WebElement getDoneButton()
    {
        WebElement doneButton = webDriver.findElement(By.id("gwt-debug-NoteAttributes-doneButton"));
        waitForTextInElement(doneButton, "Done");
        delay();
        return doneButton;
    }

    public WebElement getNewNoteButton()
    {
        return webDriver.findElement(By.id("gwt-debug-Sidebar-newNoteButton-container"));
    }

    public WebElement getNoteTitle()
    {
        return webDriver.findElement(By.id("gwt-debug-NoteTitleView-textBox"));
    }

    public WebElement getNoteMessage()
    {
        WebElement webElement = webDriver.findElement(By.id("entinymce_170_ifr"));
        waitForElement(webElement);
        return webElement;
    }

    public boolean isTitleInList(String noteTitle, String listName)
    {
        boolean containsUntitled = true;
        List<WebElement> webElementList = null;

        delay();

        while (containsUntitled)
        {
            if ("notes".equals(listName))
            {
                waitForElement(webDriver.findElement(By.className("NotesView-ScrollWindow")));
                webElementList = getWebElementList("qa-title");
            }
            else
            {
                waitForElement(webDriver.findElement(By.className("dragdrop-dropTarget")));
                webElementList = getWebElementList("qa-name");
            }
            for (WebElement webElement : webElementList)
            {
                if (webElement.getText().equals("Untitled"))
                {
                    containsUntitled = true;
                    break;
                }
                else
                {
                    containsUntitled = false;
                }
            }
        }

        for (WebElement webElement : webElementList)
        {
            System.out.println(webElement.getText());
            if (noteTitle.equals(webElement.getText()))
            {
                return true;
            }
        }
        return false;
    }

    public void createTable(int column, int row)
    {
        List<WebElement> divElements = webDriver.findElement(By.id("gwt-debug-MetaBarView-root")).findElements(By.tagName("div"));
        HashMap<String, Integer> hash = new HashMap<>();
        int counter;
        for (WebElement divElement : divElements)
        {
            if (divElement.getAttribute("class") != null && "".equals(divElement.getText()))
            {
                if (hash.get(divElement.getAttribute("class")) == null)
                {
                    hash.put(divElement.getAttribute("class"), 1);
                }
                else
                {
                    counter = hash.get(divElement.getAttribute("class")) + 1;
                    hash.remove(divElement.getAttribute("class"));
                    hash.put(divElement.getAttribute("class"), counter);
                }
            }
        }

        String rowClass = null;
        for (java.util.Map.Entry<String, Integer> entry : hash.entrySet())
        {
            if (entry.getValue().equals(36))
            {
                rowClass = entry.getKey();
                break;
            }
        }

        if (rowClass == null)
        {
            throw new ElementNotFoundException("div", "table", "cell");
        }


        String columnClass = webDriver.findElement(By.className(rowClass)).findElement(By.xpath("..")).getAttribute("class");

        if (!hash.get(columnClass).equals(6))
        {
            throw new ElementNotFoundException("div", "table", "cell");
        }

        webDriver.findElements(By.className(columnClass)).get(row-1).findElements(By.className(rowClass)).get(column-1).click();
    }

    private List<WebElement> getTableRows()
    {
        WebElement webElement = webDriver.findElement(By.id("EN_IframePanel_0"));
        return webDriver.switchTo().frame(webElement).findElements(By.tagName("tr"));
    }

    private int getTableColumns(List<WebElement> rowElements)
    {
        int columnCount = -1;

        for (WebElement rowElement : rowElements)
        {
            if (columnCount == -1)
            {
                columnCount = rowElement.findElements(By.tagName("td")).size();
            }
            else if (columnCount != rowElement.findElements(By.tagName("td")).size())
            {
                return -1;
            }
        }

        return columnCount;
    }

    public Table retrieveTable()
    {
        List<WebElement> tableRows = getTableRows();
        return new Table(tableRows.size(), getTableColumns(tableRows));
    }

    public WebElement getSortOption(String sortMethod)
    {
        List<WebElement> selections = webDriver.findElement(By.id("gwt-debug-notesListView")).findElements(By.className("SelectorOption"));

        for (WebElement selection : selections)
        {
            if (sortMethod.equals(selection.getText()))
            {
                return selection;
            }
        }

        throw new ElementNotFoundException(sortMethod, "class", "SelectorOption");
    }

    public boolean assertSortMethod(String parameter, String order)
    {
        List<WebElement> webElements;

        getNoteMessage().click();

        if ("Date Created".equals(parameter))
        {
            webElements = webDriver.findElement(By.id("gwt-debug-notesListView")).findElements(By.className("qa-date"));
        }
        else
        {
            webElements = webDriver.findElement(By.id("gwt-debug-notesListView")).findElements(By.className("qa-title"));
        }

        Map<Integer, String> sorted = fetchCorrectSortList(webElements, true);
        int value;
        int previousValue = -1;
        String text;
        for (int i = 0; i < sorted.size(); i++)
        {
            text = sorted.get(i);
            value = Integer.parseInt(text.substring(0, 2).trim());

            System.out.println("Value: " + value);
            System.out.println("Previous Value: " + previousValue);

            if (previousValue != -1)
            {
                switch (order)
                {
                    case "newest first":
                    case "ascending":
                        if (previousValue > value)
                        {
                            System.out.println("List not in " + order + " order!");
                            return false;
                        }
                        break;
                    case "oldest first":
                    case "descending":
                        if (previousValue < value)
                        {
                            System.out.println("List not in " + order + " order!");
                            return false;
                        }
                        break;
                    default: throw new IllegalArgumentException("Unsupported sorting option:" + order);
                }
            }
            previousValue = value;
        }

        return true;
    }

    public Map<Integer, String> fetchCorrectSortList(List<WebElement> webElements, boolean isAscending)
    {
        HashMap<Integer, String> hashMap = new HashMap<>();

        String attribute;
        for (WebElement webElement : webElements)
        {
            attribute = webElement.getAttribute("data-reactid");
            hashMap.put(Integer.parseInt(attribute.substring(attribute.indexOf("$")+1, attribute.indexOf("$")+2)), webElement.getText());
        }

        return isAscending ? new TreeMap<>(hashMap) : new TreeMap<>(hashMap).descendingMap();
    }

    public void deleteAllNotes()
    {
        List<WebElement> deleteElements;
        do
        {
            deleteElements = getDeleteButtons("notes");
            if (deleteElements.stream().findFirst().isPresent())
            {
                hoverOn(deleteElements.stream().findFirst().get());
                deleteElements.stream().findFirst().get().click();
                waitForElement(getConfirmationButton());
                getConfirmationButton().click();
                delay();
            }
        } while (deleteElements.size() > 1);
    }


    public class Table
    {
        private int rowCount;
        private int columnCount;

        public Table(int rowCount, int columnCount)
        {
            this.rowCount = rowCount;
            this.columnCount = columnCount;
        }

        public int getRowCount()
        {
            return rowCount;
        }

        public int getColumnCount()
        {
            return columnCount;
        }
    }
}
