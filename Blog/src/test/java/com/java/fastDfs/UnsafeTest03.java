package com.java.fastDfs;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * 线程不安全：操作容器
 *
 * @author 裴新 QQ:3401997271
 *
 */
public class UnsafeTest03 {
	public static void main(String[] args) throws InterruptedException {
		List<String> list = new Vector<>();
		for(int i=0;i<10000;i++) {
			new Thread(()->{
				list.add(Thread.currentThread().getName());
			}) .start();
		}
		Thread.sleep(Long.parseLong("1000"));
		System.out.println(list.size());
	}
}

