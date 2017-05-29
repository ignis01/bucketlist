package com.ignis01.awstraining.demoapp.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

/**
 * Created by ydong05 on 27/05/2017.
 */
public class BucketListItem {
    long itemId;
    String title;
    String description;
    boolean accomplished;

    @JsonFormat(pattern="yyyy-MM-dd")
    Date accomplishedDate;

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isAccomplished() {
        return accomplished;
    }

    public void setAccomplished(boolean accomplished) {
        this.accomplished = accomplished;
    }

    public Date getAccomplishedDate() {
        return accomplishedDate;
    }

    public void setAccomplishedDate(Date accomplishedDate) {
        this.accomplishedDate = accomplishedDate;
    }

    @Override
    public String toString() {
        return "BucketListItem{" +
                "itemId=" + itemId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", accomplished=" + accomplished +
                ", accomplishedDate=" + accomplishedDate +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BucketListItem that = (BucketListItem) o;

        return getItemId() == that.getItemId();
    }

    @Override
    public int hashCode() {
        return (int) (getItemId() ^ (getItemId() >>> 32));
    }

    public BucketListItem(String title, String description, boolean accomplished, Date accomplishedDate) {
        this.title = title;
        this.description = description;
        this.accomplished = accomplished;
        this.accomplishedDate = accomplishedDate;
    }

    public BucketListItem() {
    }
}
