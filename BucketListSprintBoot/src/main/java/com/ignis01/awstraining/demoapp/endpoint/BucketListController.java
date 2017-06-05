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

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/bucketlist", method = RequestMethod.GET, produces = "application/json")
    public BucketList getBucketList(){
        List bucketList = bucketListRepository.getBucketList();
        return new BucketList(bucketList);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/bucketlist/{itemId}", method = RequestMethod.GET, produces = "application/json")
    public BucketListItem getBucketListItem(@PathVariable(required = true) int itemId){
        return bucketListRepository.getBucketListItem(itemId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/bucketlist/{itemId}", method = RequestMethod.DELETE, produces = "application/json")
    public void deleteBucketListItem(@PathVariable(required = true) int itemId){
         bucketListRepository.deleteBucketListItem(itemId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/bucketlist", method = RequestMethod.POST, produces = "application/json")
    public BucketListItem addBucketListItem(@RequestBody BucketListItem bucketListItem){
        return bucketListRepository.addBucketListItem(bucketListItem);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/bucketlist/{itemId}", method = RequestMethod.PUT, produces = "application/json")
    public void updateBucketListItem(@PathVariable (required = true) int itemId,
                                            @RequestBody BucketListItem bucketListItem){
        bucketListItem.setItemId(itemId);
        bucketListRepository.updateBucketListItem(bucketListItem);
    }
}
