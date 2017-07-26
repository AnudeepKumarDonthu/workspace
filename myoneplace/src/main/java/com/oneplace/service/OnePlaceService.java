/**
 * 
 */
package com.oneplace.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.oneplace.repository.OnePlaceRepository;

/**
 * @author AnudeepKumar
 *
 */
@Service("onePlaceService")
public class OnePlaceService {
	
	
	@Autowired
	@Qualifier("onePlaceRepository")
	private OnePlaceRepository onePlaceRepository;
	
	public void testService() {
		System.out.println("I am in service");
		onePlaceRepository.testRepository();
	}

}
