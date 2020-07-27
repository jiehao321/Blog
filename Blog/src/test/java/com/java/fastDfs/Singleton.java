package com.java.fastDfs;

/**
 * @author holler
 * @date 2020-05-11 19:43
 */
public class Singleton {
    private static class Sing{
        private static final Singleton s = new Singleton();
    }
    public Singleton(){}
    public static Singleton getInstance(){
        return Sing.s;
    }
}
