package com.dimple.project.tool.service;

import com.dimple.project.tool.domain.QiNiuContent;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

/**
 * @className: QiNiuService
 * @description:
 * @author: Dimple
 * @date: 11/06/19
 */
public interface QiNiuService {

    /**
     * 上传文件到七牛云
     *
     * @param file 要上传的文件
     * @return 七牛云信息
     */
    QiNiuContent upload(MultipartFile file);


    /**
     * 删除文件
     *
     * @param id 文件的Id
     * @return 受影响的行数
     */
    int deleteQiNiuContent(String id);

    /**
     * 获取下载文件的Url地址
     *
     * @param id 文件id
     * @return 下载地址
     */
    String getDownloadUrl(Long id);

    /**
     * 获取七牛云文件集合
     *
     * @param qiNiuContent 查询条件
     * @return list
     */
    List<QiNiuContent> selectContentList(QiNiuContent qiNiuContent);

}
