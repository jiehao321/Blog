package com.java.fastDfs;

import java.io.IOException;

/**
 * @author holler
 * @date 2020-06-01 18:30
 */
public class cl2 {



    public static void main(String args[]) throws IOException, InterruptedException {
        String str = "nineeightsevensixfivefourthreetwoonezero";
        System.out.println(str);
        String strs [] = {"zero","one","two","three","four","five","six","seven","eight","nine"};
        StringBuffer message = new StringBuffer("");
        int index = 0;
        int endIndex = 0;
        for(int i = 0 ; i < strs.length ; i++){
            if(str.indexOf(strs[i]) != -1){
                index = str.indexOf(strs[i]);//拿到第一次出现的第一个坐标位置
                endIndex = index+strs[i].length();//拿到这个字符的最后一个位置
                str = remove(str,index,endIndex);
                message.append(i);
            }
        }
        System.out.println("最后的结果="+message);
    }
    public static String remove(String str ,int startIndex,int endIndex){//因为String没有remove的api所以自己实现一个
        char cStr [] = str.toCharArray();
        char[] newChar = new char[cStr.length-(endIndex-startIndex)];//长度由当前截取出来的最后一位和第一位算出差值
        for(int i = 0 ; i < cStr.length ; i++){
            if(!(i >= startIndex && i <= endIndex)){//指定访问内的字段不重组
                newChar[i] = cStr[i];
            }
        }
        return String.valueOf(newChar);
    }
}
