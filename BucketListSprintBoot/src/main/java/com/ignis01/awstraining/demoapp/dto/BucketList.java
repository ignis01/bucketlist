package com.ignis01.awstraining.demoapp.dto;

import java.util.Collection;

/**
 * Created by ydong05 on 27/05/2017.
 */
public class BucketList {
    Collection<BucketListItem> bucketList;
    int count;

    public Collection<BucketListItem> getBucketList() {
        return bucketList;
    }

    public void setBucketList(Collection<BucketListItem> bucketList) {
        this.bucketList = bucketList;
    }

    public int getCount() {
        return bucketList.size();
    }

    public void setCount(int count) {
        this.count = count;
    }

    public BucketList(Collection<BucketListItem> bucketList) {
        this.bucketList = bucketList;
    }
}
