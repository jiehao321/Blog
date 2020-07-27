(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad7bffc","chunk-4d02c807"],{"27e6":function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o("b775");function r(t){return Object(a["a"])({url:"/book/category/list",method:"get",params:t})}},3466:function(t,e,o){"use strict";var a=o("8d78"),r=o.n(a);r.a},"420f":function(t,e,o){"use strict";var a={Cache:{put:function(t,e,o){try{if(!localStorage)return!1;o&&!isNaN(o)||(o=86400);var a=new Date-1+1e3*o,r={val:e,exp:a};localStorage.setItem(t,JSON.stringify(r))}catch(n){}},get:function(t){try{if(!localStorage)return!1;var e=localStorage.getItem(t),o=JSON.parse(e),a=new Date-1;return o?a>o.exp?(this.remove(t),""):o.val:null}catch(r){return this.remove(t),null}},remove:function(t){if(!localStorage)return!1;localStorage.removeItem(t)},clear:function(){if(!localStorage)return!1;localStorage.clear()}}};e["a"]=a},"623b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"form",staticClass:"form-container",attrs:{model:t.form,rules:t.rules}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+(null==t.form.status?"publish":"draft")}},[o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.loading,icon:"el-icon-check",type:"success",plain:""},on:{click:t.submitNote}},[t._v("发布 ")]),o("el-button",{attrs:{loading:t.loading,icon:"el-icon-message",type:"warning",plain:""},on:{click:t.draftNote}},[t._v("保存草稿 ")])],1),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-row",[o("el-col",{attrs:{span:18}},[o("el-form-item",{attrs:{prop:"title",label:"标题: ","label-width":"60px"}},[o("el-input",{attrs:{placeholder:"请输入标题",clearable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{"label-width":"60px",label:"摘要: ",prop:"summary"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},placeholder:"请输入摘要"},model:{value:t.form.summary,callback:function(e){t.$set(t.form,"summary",e)},expression:"form.summary"}})],1),o("el-form-item",{attrs:{prop:"chapter",label:"章节: ","label-width":"60px"}},[o("el-input",{attrs:{placeholder:"请输入章节",clearable:""},model:{value:t.form.chapter,callback:function(e){t.$set(t.form,"chapter",e)},expression:"form.chapter"}})],1),o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{prop:"bookId","label-width":"60px",label:"图书: "}},[o("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择图书"},model:{value:t.form.bookId,callback:function(e){t.$set(t.form,"bookId",e)},expression:"form.bookId"}},t._l(t.bookOptions,(function(t){return o("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),o("el-col",{attrs:{span:4}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"推荐: ",prop:"support"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.support,callback:function(e){t.$set(t.form,"support",e)},expression:"form.support"}})],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"评论: ",prop:"comment"}},[o("el-radio-group",{model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}},[o("el-radio",{attrs:{label:!0}},[t._v("开启")]),o("el-radio",{attrs:{label:!1}},[t._v("关闭")])],1)],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"100px",label:"封面类型: ",prop:"comment"}},[o("el-radio-group",{on:{change:t.headerImgTypeChange},model:{value:t.form.headerImgType,callback:function(e){t.$set(t.form,"headerImgType",e)},expression:"form.headerImgType"}},[o("el-radio",{attrs:{label:0}},[t._v("无")]),o("el-radio",{attrs:{label:1}},[t._v("普通")]),o("el-radio",{attrs:{label:2}},[t._v("大图")])],1)],1)],1)],1),o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{"label-width":"60px",label:"权重: ",prop:"weight"}},[o("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:5,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":5},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}})],1)],1),o("el-col",{attrs:{span:16}},[o("el-form-item",{attrs:{"label-width":"60px",label:"标签: ",prop:"tagTitleList"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"","default-first-option":"",filterable:"",remote:"",loading:t.loading,"remote-method":t.getRemoteTagList,"allow-create":"",placeholder:"请选择笔记标签"},model:{value:t.form.tagTitleList,callback:function(e){t.$set(t.form,"tagTitleList",e)},expression:"form.tagTitleList"}},t._l(t.blogTagOptions,(function(t){return o("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1)],1)],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{prop:"headerImg","label-width":"60px",label:"封面"}},[o("div",{staticClass:"avatar-uploader",on:{click:function(e){t.imagePickerOpen=!0}}},[o("div",{staticClass:"el-upload el-upload--text"},[t.form.headerImg?o("img",{staticClass:"avatar",attrs:{src:t.form.headerImg}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])])])],1)],1)],1),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[o("mavonEditor",{ref:"editor",staticStyle:{"min-height":"500px"},on:{imgAdd:t.handleEditorImgAdd},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1)],1),o("el-dialog",{attrs:{title:"图片选择",visible:t.imagePickerOpen},on:{"update:visible":function(e){t.imagePickerOpen=e}}},[o("ImagePicker",{on:{onImgSelect:t.onImgSelect}}),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.imagePickerOpen=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.imagePickerOpen=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],n=o("b804"),i=o("b2d8"),l=(o("64e1"),o("7c91")),s=o("27e6"),c=o("5f87"),m=o("e0c1"),u=o.n(m),f=o("9804"),d=o("420f"),p=o("b26e"),g={name:"NoteDetail",components:{Sticky:n["a"],mavonEditor:i["mavonEditor"],ImagePicker:f["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{imagePickerOpen:!1,imagesUploadApi:"",headers:{Authorization:"Bearer "+Object(c["a"])()},tags:"",form:{headerImgType:0,headerImg:"",weight:1,tagTitleList:[],comment:!0,support:!1},loading:!1,tempRoute:{},bookOptions:[],blogTagOptions:[],rules:{title:[{required:!0,message:"笔记标题不能为空",trigger:"blur"},{min:3,max:100,message:"长度在 3 到 100 个字符",trigger:"change"}],summary:[{required:!0,message:"笔记摘要不能为空",trigger:"blur"},{min:10,max:250,message:"长度在 10 到 250 个字符",trigger:"change"}],categoryId:[{required:!0,message:"笔记分类不能为空",trigger:"change"}],comment:[{required:!0,message:"评论不能为空",trigger:"change"}],tag:[{required:!0,message:"至少选择一个标签",trigger:"change"}]}}},created:function(){var t=this,e=d["a"].Cache.get("noteCache"),o=!0;if(void 0!=e&&void 0!=e.content&&0!=e.content.length&&this.$confirm("检测到本地存在未发布笔记,是否继续编辑","提示",{confirmButtonText:"继续编辑",cancelButtonText:"删除本地记录",type:"warning"}).then((function(){t.msgSuccess("已成功恢复!"),t.form=e,o=!1})).catch((function(){t.msgInfo("已删除!"),d["a"].Cache.remove("noteCache")})),o&&this.isEdit){var a=this.$route.params&&this.$route.params.id;this.fetchData(a)}this.tempRoute=Object.assign({},this.$route),this.getCategory(),this.imagesUploadApi="/prod-api/tool/qiNiu",setInterval((function(){d["a"].Cache.put("noteCache",t.form)}),1e4)},methods:{onImgSelect:function(t){this.form.headerImg=t,0==this.form.headerImgType&&(this.form.headerImgType=1)},headerImgTypeChange:function(){0==this.form.headerImgType&&(this.form.headerImg=void 0)},handleUploadSuccess:function(t,e){200==t.code?(this.form.headerImg=t.data.url,0==this.form.headerImgType&&(this.form.headerImgType=1)):this.msgError("上传文件失败!"+t.message)},getRemoteTagList:function(t){var e=this;""!==t?(this.loading=!0,setTimeout((function(){e.loading=!1,Object(l["f"])(t).then((function(t){e.blogTagOptions=t.rows,e.loading=!1}))}),200)):this.blogTagOptions=[]},getCategory:function(){var t=this;Object(s["a"])().then((function(e){200==e.code?t.bookOptions=e.rows:t.msgError(e.msg)}))},fetchData:function(t){var e=this;Object(l["e"])(t).then((function(t){200==t.code?e.form=t.data:e.msgError(t.msg)}))},submitNote:function(){var t=this;this.form.htmlContent=u()(this.form.content),d["a"].Cache.remove("noteCache"),this.$refs.form.validate((function(e){if(e){t.loading=!0,t.form.status=!0;var o=JSON.parse(JSON.stringify(t.form));void 0==o.id?Object(l["a"])(o).then((function(e){200===e.code?(t.msgSuccess("发布成功"),t.$store.dispatch("tagsView/delView",t.$route),t.$router.push({path:"/bookManage/note"})):t.msgError(e.msg),t.loading=!1})).catch((function(e){t.loading=!1})):Object(l["g"])(o).then((function(e){200===e.code?(t.msgSuccess("发布成功"),t.$store.dispatch("tagsView/delView",t.$route),t.$router.push({path:"/bookManage/note"})):t.msgError(e.msg),t.loading=!1})).catch((function(e){t.loading=!1}))}}))},draftNote:function(){var t=this;if(this.form.htmlContent=u()(this.form.content),0!==this.form.content.length&&0!==this.form.title.length){d["a"].Cache.remove("noteCache");var e=JSON.parse(JSON.stringify(this.form));e.status=!1,void 0==e.id?Object(l["b"])(e).then((function(e){200===e.code?t.msgSuccess("保存草稿成功"):t.msgError(e.msg)})):Object(l["h"])(e).then((function(e){200===e.code?t.msgSuccess("保存草稿成功"):t.msgError(e.msg)}))}else this.$message({message:"请填写必要的标题和内容",type:"warning"})},handleEditorImgAdd:function(t,e){var o=new FormData;o.append("file",e),Object(p["c"])(o).then((function(e){$vm.$img2Url(t,e)}))}}},h=g,b=(o("3466"),o("2877")),v=Object(b["a"])(h,a,r,!1,null,null,null);e["default"]=v.exports},"7c91":function(t,e,o){"use strict";o.d(e,"e",(function(){return r})),o.d(e,"a",(function(){return n})),o.d(e,"g",(function(){return i})),o.d(e,"d",(function(){return l})),o.d(e,"c",(function(){return s})),o.d(e,"f",(function(){return c})),o.d(e,"b",(function(){return m})),o.d(e,"h",(function(){return u}));var a=o("b775");function r(t){return Object(a["a"])({url:"/book/note/"+t,method:"get"})}function n(t){return Object(a["a"])({url:"/book/note",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/book/note",method:"put",data:t})}function l(t,e){return Object(a["a"])({url:"/book/note/support/"+t+"/"+e,method:"put"})}function s(t,e){return Object(a["a"])({url:"/book/note/comment/"+t+"/"+e,method:"put"})}function c(t){return Object(a["a"])({url:"/book/note/tag/"+t,method:"get"})}function m(t){return Object(a["a"])({url:"/book/note/draft",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/book/note/draft",method:"put",data:t})}},"8d78":function(t,e,o){},b26e:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return n})),o.d(e,"c",(function(){return i}));var a=o("b775");function r(t){return Object(a["a"])({url:"/tool/qiNiu/list",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/tool/localStorage/list",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/tool/qiNiu",method:"post",data:t})}},d277:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("NoteDetail",{attrs:{"is-edit":!1}})},r=[],n=o("623b"),i={name:"AddNote",components:{NoteDetail:n["default"]}},l=i,s=o("2877"),c=Object(s["a"])(l,a,r,!1,null,null,null);e["default"]=c.exports}}]);