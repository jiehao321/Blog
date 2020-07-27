package com.dimple.framework.redis;

import lombok.Data;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;


public class ma {
    @Data
    public static class User implements java.io.Serializable,Comparable {
        private static final long serialVersionUID = -3522051445403971732L;

        private Integer userId;
        private String username;
        private Date birthDate;
        private Integer age;
        private float fRate;
        private char ch;



        public String getUsername() {
            return username;
        }

        public Date getBirthDate() {
            return birthDate;
        }

        public String getBirthDatestr() {
            SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd");
            return formater.format(getBirthDate());
        }

        public User(Integer userId, String username, Date birthDate, Integer age, float fRate, char ch) {
            super();
            this.userId = userId;
            this.username = username;
            this.birthDate = birthDate;
            this.age = age;
            this.fRate = fRate;
            this.ch = ch;
        }

        @Override
        public String toString() {
            return "User [userId=" + userId + ", \tusername=" + username + ", \tbirthDate=" + getBirthDatestr()
                    + ", \tage=" + age + ", fRate=" + fRate + ", ch=" + ch + "]";
        }

        @Override
        public int compareTo(Object o) {
            return 0;
        }
    }
    public static void main(String[] args) throws ParseException {
        Main main = new Main();
        List<User> list = new ArrayList<User>();
        SimpleDateFormat formater = new SimpleDateFormat("yyyy-MM-dd");
        User user1 = new User(3, "1567", formater.parse("1980-12-01"), 1, 1.2f, 'a');
        User user2 = new User(0, "126", formater.parse("1900-10-11"), 03, -3.6f, 'c');
        User user3 = new User(12, "5", formater.parse("1973-08-21"), 15, 9.32f, 'f');
        User user4 = new User(465, "AAA", formater.parse("2012-01-26"), 20, 12.56f, '0');
        User user5 = new User(333, "&4m,(姓名排序显示在最后)", formater.parse("2010-05-08"), 100, 165.32f, '5');
        User user6 = new User(333, "yuyu", formater.parse("1987-07-25"), 123, 56.32f, 'm');
        User user7 = new User(333, "BBB", formater.parse("2000-10-16"), 1003, 56.32f, 'm');
        User user8 = new User(333, "yuyu", formater.parse("1987-07-25"), 666, 56.32f, 'm');
        User user9 = new User(333, "yuyu", formater.parse("1987-07-25"), 655, 56.32f, 'm');
        User user10 = new User(333, "yuyu", formater.parse("1987-07-25"), 124, 56.32f, 'm');

        list.add(user1);
        list.add(user2);
        list.add(user3);
        list.add(user4);
        list.add(user5);
        list.add(user6);
        list.add(user7);
        list.add(user8);
        list.add(user9);
        list.add(user10);
        System.out.println("\n-------原来序列-------------------");
        ma.soutList(list);

        /**
         * 排序题，重写compare
         * 按照id升序排序，id相同按照姓名name中文首字母排序，如果姓名相同按照birthDate降序排序，birthDate相同再按照age升序排序
         */
        list.sort(new Comparator<User>() {
            @Override
            public int compare(User o1, User o2){
                if (o1.getUserId() > o2.getUserId()){
                        return 1;
                }
                if (o1.getUserId().equals(o2.getUserId())){
                    if (o2.getUsername().contains("&")){
                        return -1;
                    }
                    if (o1.getUsername().equals(o2.getUsername())){
                        if (o1.getBirthDate().compareTo(o2.getBirthDate())==0){
                            return o1.getAge().compareTo(o2.getAge());
                        }
                        return o2.getBirthDate().compareTo(o2.getBirthDate());
                    }
                    return o1.getUsername().compareTo(o2.getUsername());
                }
                return -1;
            }
        });

        System.out.println("\n=============排序后list");
        ma.soutList(list);
    }





    private static void soutList(List<User> list) {
        for (User user : list) {
            System.out.println(user.toString());
        }
    }


}
