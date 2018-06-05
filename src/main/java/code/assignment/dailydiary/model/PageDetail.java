package code.assignment.dailydiary.model;

import java.util.Date;

public class PageDetail {
    private String title;
    private Date creationDate;

    public PageDetail(String title, Date creationDate) {
        this.title = title;
        this.creationDate = creationDate;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
