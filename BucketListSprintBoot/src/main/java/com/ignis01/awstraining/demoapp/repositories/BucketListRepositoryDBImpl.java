package com.ignis01.awstraining.demoapp.repositories;

import com.ignis01.awstraining.demoapp.dto.BucketListItem;

import java.util.List;

/**
 * Created by ydong05 on 28/05/2017.
 */
public class BucketListRepositoryDBImpl implements IBucketListRepository {
    @Override
    public List<BucketListItem> getBucketList() {
        return null;
    }

    @Override
    public BucketListItem getBucketListItem(long id) {
        return null;
    }

    @Override
    public void updateBucketListItem(BucketListItem item) {

    }

    @Override
    public BucketListItem addBucketListItem(BucketListItem item) {
        return null;
    }

    @Override
    public void deleteBucketListItem(long id) {

    }
}
