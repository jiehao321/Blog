package com.java.fastDfs;

import com.dimple.common.utils.StringUtils;
import lombok.Data;

import java.util.ArrayList;
import java.util.Comparator;

@Data
public class User1 implements Comparator<User1> {
    String name;
    Integer address;
    String age;



    public static void main(String[] args) {
        ArrayList <User1> arrayList=new ArrayList<>();
        arrayList.add(new User1("111",1));
        arrayList.add(new User1("中国",2));
        arrayList.add(new User1("中国",3));
        arrayList.add(new User1("深圳",4));
        arrayList.add(new User1("深圳",5));
        arrayList.add(new User1("湖北",6));
        arrayList.add(new User1("湖北",7));
        arrayList.add(new User1("江西",7));
        arrayList.add(new User1("江西",9));
        arrayList.add(new User1("江西",10));
        arrayList.add(new User1("江西",11));
        arrayList.add(new User1("江西",12));
        arrayList.add(new User1("深圳",13));
        arrayList.sort(new User1());
        //arrayList.sort(Comparator.comparing());
        for(User1 u:arrayList){
            System.out.println(u.name);
        }
    }

    @Override
    public int compare(User1 o1, User1 o2) {

        //中国排最前，深圳第二，湖北 - 江西

        if (o1.name.equals("中国")&&!o2.name.equals("中国")){
            return -1;
        }else if (o1.name.equals("深圳")&&!o2.name.equals("深圳")){
            return -1;
        }else if (o1.name.equals("湖北")&&!o2.name.equals("湖北")){
            return -1;
        }else if (o1.name.equals("江西")&&!o2.name.equals("江西")){
            return -1;
        }
        return 0;
    }
    public User1(String name, Integer address){
        this.name=name;
        this.address=address;
    }

    public User1() {
        this.name = name;
    }
}

