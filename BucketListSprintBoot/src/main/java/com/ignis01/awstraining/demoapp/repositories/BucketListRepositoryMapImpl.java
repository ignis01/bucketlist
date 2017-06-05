package com.ignis01.awstraining.demoapp.repositories;

import com.ignis01.awstraining.demoapp.dto.BucketListItem;
import sun.java2d.pipe.SpanShapeRenderer;

import java.math.BigInteger;
import java.nio.ByteBuffer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by ydong05 on 27/05/2017.
 */
public class BucketListRepositoryMapImpl implements IBucketListRepository {
    public static Map<Integer, BucketListItem> bucketListMap = null;

    private static Map<Integer, BucketListItem> getListMap(){
        if(bucketListMap==null){
            bucketListMap = new LinkedHashMap<Integer, BucketListItem>();
        }
        return bucketListMap;
    }

    @Override
    public List<BucketListItem> getBucketList() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd");
        if(getListMap().size()==0){
            try {
                addBucketListItem(new BucketListItem("Great Wall of China","BeiJing, China",true,sdf.parse("1982-10-06")));
                addBucketListItem(new BucketListItem("Grand Canyon","Grand Canyon, Arizona, United State",true,sdf.parse("2006-05-05")));
                addBucketListItem(new BucketListItem("Chichen Itza Mayan Ruins","Yucatan Peninsula, Mexico",true,sdf.parse("2016-12-20")));
                addBucketListItem(new BucketListItem("Sydney Opera House","Syndey, Australia",true,sdf.parse("2007-01-20")));
                addBucketListItem(new BucketListItem("Banff National Park","Banff National Park, Alberta, Canada",false,null));
                addBucketListItem(new BucketListItem("Wailing Wall","Old City of Jerusalem, Israel",false,null));
                addBucketListItem(new BucketListItem("Taj Mahal","Agra, India",false,null));
                addBucketListItem(new BucketListItem("Kyoto Temples","Kyoto, Japan",false,null));
                addBucketListItem(new BucketListItem("Louvre Palace","Paris, France",false,null));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        return new ArrayList<BucketListItem>(getListMap().values());
    }

    @Override
    public BucketListItem getBucketListItem(int id) {
       return getListMap().get(Integer.valueOf(id));
    }

    @Override
    public void updateBucketListItem(BucketListItem item) {
        Map result = getListMap();
        getListMap().put(Integer.valueOf(item.getItemId()), item);
        Map result1 = getListMap();
    }

    @Override
    public BucketListItem addBucketListItem(BucketListItem item) {
        item.setItemId(generateUniqueId());
        getListMap().put(Integer.valueOf(item.getItemId()),item);
        return item;
    }

    @Override
    public void deleteBucketListItem(int id) {
        getListMap().remove(Integer.valueOf(id));
    }

    private Integer generateUniqueId()
    {
        int val = -1;
        do
        {
            final UUID uid = UUID.randomUUID();
            final ByteBuffer buffer = ByteBuffer.wrap(new byte[16]);
            buffer.putLong(uid.getLeastSignificantBits());
            buffer.putLong(uid.getMostSignificantBits());
            final BigInteger bi = new BigInteger(buffer.array());
            val = bi.intValue();
        } while (val < 0);
        return val;
    }
}
