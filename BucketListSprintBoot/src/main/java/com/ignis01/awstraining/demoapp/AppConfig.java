package com.ignis01.awstraining.demoapp;

import com.ignis01.awstraining.demoapp.repositories.BucketListRepositoryMapImpl;
import com.ignis01.awstraining.demoapp.repositories.IBucketListRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by ydong05 on 28/05/2017.
 */
@Configuration
public class AppConfig {

    @Bean
    public IBucketListRepository IBucketListRepository() {
        return new BucketListRepositoryMapImpl();
    }

}