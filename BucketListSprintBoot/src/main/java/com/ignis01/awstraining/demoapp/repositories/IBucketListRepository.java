package com.ignis01.awstraining.demoapp.repositories;

import com.ignis01.awstraining.demoapp.dto.BucketListItem;

import java.util.List;

/**
 * Created by ydong05 on 27/05/2017.
 */
public interface IBucketListRepository {
    public List<BucketListItem> getBucketList();
    public BucketListItem getBucketListItem(int id);
    public void updateBucketListItem(BucketListItem item);
    public BucketListItem addBucketListItem(BucketListItem item);
    public void deleteBucketListItem(int id);
}
