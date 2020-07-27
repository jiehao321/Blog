package com.java.fastDfs;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * 共享资源,并发(线程安全)
 *
 * @author 裴新 QQ:3401997271
 *
 */
public class Web12306 implements Runnable{
	//票数
	private static volatile AtomicInteger ticketNums = new AtomicInteger(99);

//	private   static volatile int ticketNums = 99;
	@Override
	 public void run() {
		while(true) {
			if(ticketNums.get()<0) {
//			if(ticketNums<0) {
				System.out.println(Thread.currentThread().getName());
				return;
			}
//			else {
//				System.out.println(Thread.currentThread().getName()+"-->"+ticketNums.getAndDecrement());
////				System.out.println(Thread.currentThread().getName()+"-->"+ticketNums--);
//			}
			try {
				Thread.sleep(200);
				System.out.println(Thread.currentThread().getName()+"-->"+ticketNums.getAndDecrement());
//				System.out.println(Thread.currentThread().getName()+"-->"+ticketNums--);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

		}
	}
	public static void main(String[] args) {
		//一份资源
		Web12306 web =new Web12306();
		System.out.println(Thread.currentThread().getName());/*currentThread()是类方法(静态方法)，
																			可以通过类.方法直接调用。*/
		//多个代理
		new Thread(web,"码畜").start();
		new Thread(web,"码农").start();
		new Thread(web,"码蟥").start();
	}
}
