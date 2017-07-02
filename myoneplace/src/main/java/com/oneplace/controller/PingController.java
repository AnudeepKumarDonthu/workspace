/**
 * 
 */
package com.oneplace.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author AnudeepKumar
 *
 */
@RestController
public class PingController {

	@RequestMapping(value = "/test",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<String> pingContol() {
		List<String> data= new ArrayList<String>();
		data.add("today");
		Date today = new Date();
		data.add(today.toString());
		return data;
	}

}
