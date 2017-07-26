/**
 * 
 */
package com.oneplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.oneplace.service.OnePlaceService;

/**
 * @author AnudeepKumar
 *
 */
@RestController
public class OnePlaceController {
	
	
	@Autowired
	@Qualifier("onePlaceService")
	private OnePlaceService OnePlaceService;
	
	
	@RequestMapping(value="/oneplace",method=RequestMethod.GET)
	public void mainController() {
		System.out.println("I am in Controller");
		OnePlaceService.testService();
		
	}

}
