package com.ignis01.awstraining.demoapp.repositories;

import com.ignis01.awstraining.demoapp.dto.BucketListItem;

import java.math.BigInteger;
import java.nio.ByteBuffer;
import java.util.*;

/**
 * Created by ydong05 on 27/05/2017.
 */
public class BucketListRepositoryMapImpl implements IBucketListRepository {
    public static Map<Long, BucketListItem> bucketListMap = null;

    private static Map<Long, BucketListItem> getListMap(){
        if(bucketListMap==null){
            bucketListMap = new HashMap<Long, BucketListItem>();
        }
        return bucketListMap;
    }

    @Override
    public List<BucketListItem> getBucketList() {
        return new ArrayList<BucketListItem>(getListMap().values());
    }

    @Override
    public BucketListItem getBucketListItem(long id) {
       return getListMap().get(Long.valueOf(id));
    }

    @Override
    public void updateBucketListItem(BucketListItem item) {
        getListMap().put(Long.valueOf(item.getItemId()),item);
    }

    @Override
    public BucketListItem addBucketListItem(BucketListItem item) {
        item.setItemId(generateUniqueId());
        getListMap().put(Long.valueOf(item.getItemId()),item);
        return item;
    }

    @Override
    public void deleteBucketListItem(long id) {
        getListMap().remove(Long.valueOf(id));
    }

    private Long generateUniqueId()
    {
        long val = -1;
        do
        {
            final UUID uid = UUID.randomUUID();
            final ByteBuffer buffer = ByteBuffer.wrap(new byte[16]);
            buffer.putLong(uid.getLeastSignificantBits());
            buffer.putLong(uid.getMostSignificantBits());
            final BigInteger bi = new BigInteger(buffer.array());
            val = bi.longValue();
        } while (val < 0);
        return val;
    }
}
