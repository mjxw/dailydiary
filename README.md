# README

## How to run
```
./gradlew bootRun
```

## Accessing the application
http://localhost:8080


## Requirements

Design and implement a daily diary application

### Design and implement a Single Page Application with following features:
1. Add or edit today's page
2. Save page
3. Access old pages using a calendar widget
4. Basic search by keywords

## Other requirements
* Use JDK 8+
* SpringBootstrap (Skeleton code with minimal rest controller already provided)
* Responsive design
* AngularJS 2+ 
* Good looking UI 

### Rest-API
* GET /api/v1/pages 
    - Returns list of daily pages
* GET /api/pages/2018-01-01 
    - Return page of that day
* GET /api/pages/today   
    - Returns today's page
* POST /api/pages/      
    - Creates a page for today. That can be accessed by today's date or using 'today'
* GET /api/v1/pages?search=keyword 
    - Returns list of daily pages where match is found

    
### Check following locations for mock up

* src/main/resources/static/home.png

* src/main/resources/static/search.png
