(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e31781d4"],{dc00:function(e,t,n){"use strict";n("96cf");var i=n("3b8d"),r=n("b775");function a(e,t){return Object(r["a"])({url:e+"/list",method:"get",params:t})}function o(e,t){return Object(r["a"])({url:e+"/"+t,method:"delete"})}function l(e,t){return Object(r["a"])({url:e+"/ids/"+t,method:"delete"})}function s(e){return Object(r["a"])({url:e+"/clean",method:"delete"})}function c(e,t){return Object(r["a"])({url:e,method:"post",data:t})}function u(e,t){return Object(r["a"])({url:e,method:"put",data:t})}t["a"]={data:function(){return{title:"",modalName:"",ids:[],single:!0,multiple:!0,row:{},loading:!0,delLoading:!1,total:0,list:[],open:!1,dateRange:[],formReset:{},form:{},queryParams:{pageNum:1,pageSize:10,orderByColumn:"createTime",isAsc:"desc"},time:50,base:""}},methods:{init:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.beforeInit();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",new Promise((function(e,n){t.loading=!0,a(t.base,t.addDateRange(t.queryParams,t.dateRange)).then((function(n){t.total=n.total,t.list=n.rows,setTimeout((function(){t.loading=!1}),t.time),e(n)})).catch((function(e){t.loading=!1,n(e)}))})));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleQuery:function(){this.queryParams.pageNum=1,this.init()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.queryParams={},this.handleQuery()},handleSelectionChange:function(e){this.row=e[0],this.ids=e.map((function(e){return e.id})),this.single=1!=e.length,this.multiple=!e.length},handleSubDelete:function(e){var t=this;return this.delLoading=!0,new Promise((function(n,i){o(t.base,e).then((function(i){t.delLoading=!1,200==i.code?(t.$refs[e].doClose(),t.init(),t.msgSuccess("删除成功")):t.msgError("删除失败"),n(i)})).catch((function(e){t.delLoading=!1,i(e)}))}))},handleAdd:function(){this.reset(),this.title="添加"+this.modelName,this.form=this.formReset,this.open=!0},submitForm:function(e){var t=this;void 0==this.$refs[e]&&(e="form");var n=JSON.parse(JSON.stringify(this.form));this.$refs[e].validate((function(e){e&&(void 0!=t.form.id?u(t.base,n).then((function(e){200===e.code?(t.msgSuccess("修改成功"),t.open=!1,t.init()):t.msgError(e.msg)})):c(t.base,n).then((function(e){200===e.code?(t.msgSuccess("新增成功"),t.open=!1,t.init()):t.msgError(e.msg)})))}))},cancel:function(){this.open=!1,this.reset()},reset:function(){var e=this;this.$nextTick((function(){void 0!==e.$refs["form"]&&e.$refs["form"].resetFields()})),this.form={}},handleUpdate:function(e){var t=e||this.row;this.form=t,this.open=!0,this.title="修改"+this.modelName},handleExport:function(){},handleDelete:function(){this.delLoading=!0;var e=this;this.$confirm('是否确认删除主键为"'+e.ids+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l(e.base,e.ids).then((function(t){e.delLoading=!1,200==t.code?(e.init(),e.msgSuccess("删除成功")):e.msgError("删除失败")})).catch((function(t){e.delLoading=!1}))})).catch((function(t){e.delLoading=!1}))},handleClean:function(){this.delLoading=!0;var e=this;this.$confirm("是否确认清空所有数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s(e.base).then((function(t){e.delLoading=!1,200==t.code?(e.init(),e.msgSuccess("清空成功")):e.msgError("清空失败:"+t.msg)})).catch((function(t){e.delLoading=!1}))})).catch((function(t){e.delLoading=!1}))}}}},ded5:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"queryForm",attrs:{inline:!0,"label-width":"68px"}},[n("el-form-item",{attrs:{label:"分类名称"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入分类名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),n("el-form-item",{attrs:{label:"分类描述"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入分类描述",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.description,callback:function(t){e.$set(e.queryParams,"description",t)},expression:"queryParams.description"}})],1),n("el-form-item",{attrs:{label:"创建时间"}},[n("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增 ")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:function(t){return e.handleUpdate(null)}}},[e._v("修改 ")])],1),n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",loading:e.delLoading,disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.list},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{label:"分类名称",align:"center",prop:"title","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"分类描述",align:"center",prop:"description","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改 ")]),n("el-popover",{ref:t.row.id,attrs:{placement:"top",width:"180"}},[n("p",[e._v("确定删除本条数据吗？")]),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.$refs[t.row.id].doClose()}}},[e._v("取消 ")]),n("el-button",{attrs:{loading:e.delLoading,type:"primary",size:"mini"},on:{click:function(n){return e.handleSubDelete(t.row.id)}}},[e._v("确定 ")])],1),n("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-delete",size:"mini"},slot:"reference"},[e._v("删除 ")])],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.init}}),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"分类名称",prop:"title"}},[n("el-input",{attrs:{placeholder:"请输入分类名称"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"分类描述",prop:"description"}},[n("el-input",{attrs:{placeholder:"请输入分类描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},r=[],a=n("dc00"),o={mixins:[a["a"]],data:function(){return{queryParams:{title:void 0,description:void 0},form:{support:!1},rules:{title:[{required:!0,message:"分类名称不能为空",trigger:"blur"},{min:3,max:50,message:"长度在 5 到 120 个字符",trigger:"change"}],description:[{required:!0,message:"分类描述不能为空",trigger:"blur"},{min:10,max:150,message:"长度在 10 到 256 个字符",trigger:"change"}]}}},created:function(){var e=this;this.$nextTick((function(){e.init()}))},methods:{beforeInit:function(){return this.base="/book/category",this.modelName="图书分类",!0}}},l=o,s=n("2877"),c=Object(s["a"])(l,i,r,!1,null,null,null);t["default"]=c.exports}}]);