package com.ignis01.awstraining.demoapp.endpoint;

import com.ignis01.awstraining.demoapp.dto.BucketList;
import com.ignis01.awstraining.demoapp.dto.BucketListItem;
import com.ignis01.awstraining.demoapp.repositories.IBucketListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by ydong05 on 27/05/2017.
 */
@RestController
public class BucketListController {
    @Autowired
    IBucketListRepository bucketListRepository;

    @RequestMapping(value="/bucketlist", method = RequestMethod.GET, produces = "application/json")
    public BucketList getBucketList(){
        List bucketList = bucketListRepository.getBucketList();
        return new BucketList(bucketList);
    }

    @RequestMapping(value="/bucketlist/{itemId}", method = RequestMethod.GET, produces = "application/json")
    public BucketListItem getBucketListItem(@PathVariable(required = true) long itemId){
        return bucketListRepository.getBucketListItem(itemId);
    }

    @RequestMapping(value="/bucketlist/{itemId}", method = RequestMethod.DELETE, produces = "application/json")
    public void deleteBucketListItem(@PathVariable(required = true) long itemId){
         bucketListRepository.deleteBucketListItem(itemId);
    }

    @RequestMapping(value="/bucketlist", method = RequestMethod.POST, produces = "application/json")
    public BucketListItem addBucketListItem(@RequestBody BucketListItem bucketListItem){
        return bucketListRepository.addBucketListItem(bucketListItem);
    }

    @RequestMapping(value="/bucketlist/{itemId}", method = RequestMethod.PUT, produces = "application/json")
    public void updateBucketListItem(@PathVariable (required = true) long itemId,
                                            @RequestBody BucketListItem bucketListItem){
        bucketListItem.setItemId(itemId);
        bucketListRepository.updateBucketListItem(bucketListItem);
    }
}
