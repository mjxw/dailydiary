package code.assignment.dailydiary.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class DiaryPage {
    @JsonProperty("date_created")
    private Date dateCreated;
    private String content;
    private String title;


    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
