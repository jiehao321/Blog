package com.dimple.project.tool.service.impl;

import com.alibaba.fastjson.JSON;
import com.dimple.common.constant.ConfigKey;
import com.dimple.common.exception.CustomException;
import com.dimple.common.utils.ConvertUtils;
import com.dimple.common.utils.SecurityUtils;
import com.dimple.common.utils.StringUtils;
import com.dimple.common.utils.file.FileUtils;
import com.dimple.project.system.domain.Config;
import com.dimple.project.system.service.ConfigService;
import com.dimple.project.common.domain.QiNiuConfig;
import com.dimple.project.tool.domain.FastDFSFile;
import com.dimple.project.tool.domain.QiNiuContent;
import com.dimple.project.tool.mapper.QiNiuContentMapper;
import com.dimple.project.tool.service.QiNiuService;
import com.dimple.project.tool.utils.FastDFSUtil;
import com.dimple.project.tool.utils.QiNiuUtils;
import com.qiniu.common.QiniuException;
import com.qiniu.http.Response;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.storage.model.FileInfo;
import com.qiniu.util.Auth;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 * @className: QiNiuServiceImpl
 * @description:
 * @author: Dimple
 * @date: 11/06/19
 */
@Service
@Slf4j
public class QiNiuServiceImpl implements QiNiuService {

    @Autowired
    private QiNiuContentMapper qiNiuContentMapper;


    @Override
    public QiNiuContent upload(MultipartFile file) {
        //封装文件 信息
        QiNiuContent qiNiuContent = new QiNiuContent();
        try {
            FastDFSFile fastDFSFile = new FastDFSFile(
                    file.getOriginalFilename(), //文件名字
                    file.getBytes(),  //文件字节数组
                    org.springframework.util.StringUtils.getFilenameExtension(file.getOriginalFilename())); //获取文件扩展名

            //调用FastDfSUtil工具类传入到FastDFS中
            String[] uploads = FastDFSUtil.upload(fastDFSFile);

            //拼接访问地址 url = http://192.168.177.59:8080/
            String url = FastDFSUtil.getTrackerInfo() + "/" + uploads[0] + "/"+ uploads[1];
            //将结果存入数据库
            qiNiuContent.setSuffix(file.getOriginalFilename());
            qiNiuContent.setType("公开");
            qiNiuContent.setName(file.getOriginalFilename());
            qiNiuContent.setUrl(url);
            qiNiuContent.setSize(FileUtils.getSizeString(Integer.parseInt(file.getSize() + "")));
            qiNiuContent.setCreateTime(new Date());
            qiNiuContentMapper.insertContent(qiNiuContent);
        } catch (Exception e) {
            throw new CustomException(e.getMessage());
        }
        return qiNiuContent;
    }


    private Date convertUnixTime(String time) {
        if (StringUtils.isEmpty(time)) {
            return new Date();
        }
        //去掉后七位
        String realTimeStr = time.substring(0, time.length() - 7);
        try {
            Long createTime = Long.valueOf(realTimeStr);
            return new Date(createTime);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new Date();
        }
    }

    @Override
    public int deleteQiNiuContent(String ids) {
        Long[] idArray = ConvertUtils.toLongArray(ids);
        //查询
        delFfs(idArray);
        return qiNiuContentMapper.deleteContentByIds(idArray);
    }

    private void delFfs(Long[] idArray) {
        List<QiNiuContent> qiNiuContentList = qiNiuContentMapper.selectContentByIds(idArray);

        for (QiNiuContent qiNiuContent : qiNiuContentList) {
            if (Objects.isNull(qiNiuContent) || StringUtils.isEmpty(qiNiuContent.getName())) {
                throw new CustomException("数据异常");
            }
            //删除dfs里的文件，参数：groupName， remoteFileName
            String url = qiNiuContent.getUrl();
            List<String> gf = groupAndFile(url);
            try {
                int i = FastDFSUtil.deleteFile(gf.get(0), gf.get(1));
                if (i != 0){
                    throw new CustomException("删除出错");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private List<String> groupAndFile(String url){
        ArrayList<String> gf = new ArrayList<>();
        String[] strs = url.split("8080/");
        String str = strs[1];
        String[] gros = str.split("/M00/00/00/");
        gf.add(gros[0]);
        String[] names = str.split("group1/");
        gf.add(names[1]);
        return gf;
    }

    @Override
    public String getDownloadUrl(Long id) {
        QiNiuContent qiNiuContent = qiNiuContentMapper.selectContentById(id);
        //下载dfs里的文件，参数：groupName， remoteFileName
        return qiNiuContent.getUrl();
    }

    @Override
    public List<QiNiuContent> selectContentList(QiNiuContent qiNiuContent) {
        return qiNiuContentMapper.selectContentList(qiNiuContent);
    }

}
