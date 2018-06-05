package code.assignment.dailydiary;

import code.assignment.dailydiary.model.DiaryPage;
import code.assignment.dailydiary.model.PageDetail;

import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FilenameFilter;
import java.io.IOException;
import java.net.URI;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class DailyDiaryEndpoint {
	
	@RequestMapping(value = "pages/", method = RequestMethod.POST)
  	public ResponseEntity<?> savePage(@RequestBody DiaryPage entry) throws Exception {
	  	// Creating/formating today's date
		String pattern = "yyyy-MM-dd";
	  	SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
	  	String date = simpleDateFormat.format(new Date());
	
	  	writeToFile(date, entry);
	  	System.out.println("HERE");
	  	System.out.println(new URI(date));
	    return ResponseEntity.created(new URI("/api/v1/pages/"+ date)).build();

  	}
	
	public void writeToFile(String date, DiaryPage entry) throws Exception{
	  	// Creating ArrayList of the lines that go in our .txt file
	  	ArrayList<String> lines = new ArrayList<String>();
	  	lines.add(entry.getTitle());
	  	lines.add(entry.getContent());
	  	
	  	// Create diaryEntries directory if it doesn't exist
	    Path path = Paths.get("diaryEntries");
	    if (!Files.exists(path)) {
	        try {
	            Files.createDirectories(path);
	        } catch (IOException e) {
	            //fail to create directory
	            e.printStackTrace();
	        }
	    }
  	
	  	// Write .txt file to 'diaryEntries' directory 
	  	Path file = Paths.get(path+ "/" + date + ".txt");
	  	Files.write(file, lines, Charset.forName("UTF-8"));
	}
  
	@RequestMapping(value = "pages/{date}", method = RequestMethod.POST)
	public ResponseEntity saveDifferentPage(@RequestBody DiaryPage entry) throws Exception{
		// Get date from DiaryPage, add 1 day to it because for some reason it is converted -1 day, format the date
	  	Date date = entry.getDateCreated();
	  	
	  	// Adding +1 day
	  	Calendar c = Calendar.getInstance();
	  	c.setTime(date);
	  	c.add(Calendar.DATE,  1);
	  	date = c.getTime();
	  	String pattern = "yyyy-MM-dd";
	  	
	  	// Formatting the date 
	  	SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
	  	String entryDate = simpleDateFormat.format(date);

	  	writeToFile(entryDate, entry);
	    return ResponseEntity.created(new URI("/api/v1/pages/"+ entryDate)).build();
	}

    @RequestMapping(value = "pages/today", method = RequestMethod.GET)
    public DiaryPage getTodaysPage() throws Exception{
       //@ToDo get todays page by providing proper formatted date
	  	
    	// Creating/formating today's date
		String pattern = "yyyy-MM-dd";
	  	SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
	  	String date = simpleDateFormat.format(new Date());
	  	
        return getPage(null, date);
    }
    
    @RequestMapping(value = "pages/{date}", method = RequestMethod.GET)
    public DiaryPage getPage(@PathVariable(value="date") String urlDate, String date) throws IOException{
    	try {
    		File file = null;
    		if (urlDate == null) {
        		file = new File("diaryEntries/" + date +".txt");
    		} else {
    			file = new File("diaryEntries/" + urlDate +".txt");
    		}

            BufferedReader b = new BufferedReader(new FileReader(file));

            String readLine = "";
            StringBuilder entryContent = new StringBuilder();

            String title = b.readLine();

            while ((readLine = b.readLine()) != null) {
                entryContent.append(readLine);
            }
            
            // Building diaryPage object 
            String content = entryContent.toString();
            DiaryPage diaryPage = new DiaryPage();
            diaryPage.setTitle(title);
            diaryPage.setContent(content);
            Date createdDate = new Date();
            diaryPage.setDateCreated(createdDate);
	        return diaryPage;

    	}
    	catch(IOException ex) {
    		System.out.println("An IOException was caught!");
    		ex.printStackTrace();
    		
    		// Return blank diary page because we can't find existing entry
    		return new DiaryPage();
    	} 
    }

    @RequestMapping(value="pages",  method = RequestMethod.GET)
    public List<PageDetail> getPageList() throws IOException, ParseException{
        List<PageDetail> pageList = new ArrayList<>();        
        try {
            // Go through diaryEntries directory and interrogate each file 
            File folder = new File("diaryEntries/");
           
            // Look for all *.txt files
            File[] fileList = folder.listFiles(new FilenameFilter() {
                public boolean accept(File dir, String name) {
                    return name.toLowerCase().endsWith(".txt");
                }
            });
            for (File file : fileList) {
                BufferedReader b = new BufferedReader(new FileReader("diaryEntries/" + file.getName()));

                // Get the title
                String title = b.readLine();
                
                // Parse and convert date
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                Date convertedDate =  sdf.parse(file.getName());  
                
                // Generate PageDetail from file
                pageList.add(new PageDetail(title, convertedDate)); 
            }
        }
        catch (IOException ex) {
    		System.out.println("An IOException was caught!");
    		ex.printStackTrace();
        }
        catch (ParseException ex){
    		System.out.println("An ParseException was caught!");
    		ex.printStackTrace();
        }

        return pageList;
    }

    @RequestMapping(value="pages", params = {"search"}, method = RequestMethod.GET)
    public List<PageDetail> search(@RequestParam("search") String keyword) throws IOException, ParseException {
        List<PageDetail> pageList = new ArrayList<>();

        //@ToDo search all files and return only title and date of relevant page
        
        try {
            // Go through diaryEntries directory and interrogate each file 
            File folder = new File("diaryEntries/");
            File[] fileList = folder.listFiles(new FilenameFilter() {
                public boolean accept(File dir, String name) {
                    return name.toLowerCase().endsWith(".txt");
                }
            });
            for (File file : fileList) {
                BufferedReader b = new BufferedReader(new FileReader("diaryEntries/" + file.getName()));

                // Get the title and content
                String title = b.readLine();
                String readLine = "";
                StringBuilder entryContent = new StringBuilder();

                while ((readLine = b.readLine()) != null) {
                    entryContent.append(readLine);
                }
                
                // Parse and convert date
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                Date convertedDate =  sdf.parse(file.getName());  
                
                // If the title or the content contains our keyword, then add to pageList
                if (title.contains(keyword) || entryContent.toString().contains(keyword)) {
                    // Generate PageDetail from selected file that contains keyword
                    pageList.add(new PageDetail(title, convertedDate)); 
                }
            }
        }
        catch (IOException ex) {
    		System.out.println("An IOException was caught!");
    		ex.printStackTrace();
        }
        catch (ParseException ex){
    		System.out.println("An ParseException was caught!");
    		ex.printStackTrace();
        }
        return pageList;
    }
}
