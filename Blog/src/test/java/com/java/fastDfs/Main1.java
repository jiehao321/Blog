package com.java.fastDfs;



import com.alibaba.fastjson.JSONObject;

import java.util.*;

public class Main1 {
 
	public static void main(String[] args) {
		String a = "{\n" +
				"\t\"params\": [\n" +
				"\t\t{\n" +
				"\t\t\t\"id\": 19\n" +
				"\t\t},\n" +
				"\t\t{\n" +
				"\t\t\t\"id\": 18\n" +
				"\t\t}\n" +
				"\t\t]\n" +
				"\t\t\n" +
				"}";
		HashMap<String,List<HashMap<String , Integer>>> invoice = JSONObject.parseObject(a, HashMap.class);
		System.out.println(invoice);
	}
}
