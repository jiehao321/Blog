(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22252c"],{cdb7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"创建者"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入参数名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.createBy,callback:function(t){e.$set(e.queryParams,"createBy",t)},expression:"queryParams.createBy"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入参数键名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.remark,callback:function(t){e.$set(e.queryParams,"remark",t)},expression:"queryParams.remark"}})],1),a("el-form-item",{attrs:{label:"系统内置"}},[a("el-select",{attrs:{placeholder:"系统内置",clearable:"",size:"small"},model:{value:e.queryParams.configType,callback:function(t){e.$set(e.queryParams,"configType",t)},expression:"queryParams.configType"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.configList}},[a("el-table-column",{attrs:{label:"参数名称",align:"center",prop:"remark","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建者",align:"center",prop:"createBy","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"标签",align:"center",prop:"dictLabel"}}),a("el-table-column",{attrs:{label:"系统内置",align:"center",prop:"configType",formatter:e.typeFormat}}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改 ")]),a("el-popover",{ref:t.row.id,attrs:{placement:"top",width:"180"}},[a("p",[e._v("确定删除本条数据吗？")]),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.$refs[t.row.id].doClose()}}},[e._v("取消 ")]),a("el-button",{attrs:{loading:e.loading,type:"primary",size:"mini"},on:{click:function(a){return e.handleSubDelete(t.row.id)}}},[e._v("确定 ")])],1),a("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-delete",size:"mini"},slot:"reference"},[e._v("删除 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"参数名称",prop:"configName"}},[a("el-input",{attrs:{placeholder:"请输入参数名称"},model:{value:e.form.configName,callback:function(t){e.$set(e.form,"configName",t)},expression:"form.configName"}})],1),a("el-form-item",{attrs:{label:"参数键名",prop:"configKey"}},[a("el-input",{attrs:{placeholder:"请输入参数键名"},model:{value:e.form.configKey,callback:function(t){e.$set(e.form,"configKey",t)},expression:"form.configKey"}})],1),a("el-form-item",{attrs:{label:"参数键值",prop:"configValue"}},[a("el-input",{attrs:{placeholder:"请输入参数键值"},model:{value:e.form.configValue,callback:function(t){e.$set(e.form,"configValue",t)},expression:"form.configValue"}})],1),a("el-form-item",{attrs:{label:"系统内置",prop:"configType"}},[a("el-radio-group",{model:{value:e.form.configType,callback:function(t){e.$set(e.form,"configType",t)},expression:"form.configType"}},e._l(e.typeOptions,(function(t){return a("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel)+" ")])})),1)],1),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],i=a("c0c3"),n={data:function(){return{loading:!0,total:0,configList:[],title:"",open:!1,typeOptions:[],dateRange:[],queryParams:{pageNum:1,pageSize:10,configName:void 0,configKey:void 0,configType:void 0},form:{},rules:{configName:[{required:!0,message:"参数名称不能为空",trigger:"blur"}],configKey:[{required:!0,message:"参数键名不能为空",trigger:"blur"}],configValue:[{required:!0,message:"参数键值不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_yes_no").then((function(t){e.typeOptions=t.data}))},methods:{handleSubDelete:function(e){var t=this;this.loading=!0,Object(i["b"])(e).then((function(a){t.$refs[e].doClose(),t.loading=!1,200==a.code?t.msgSuccess("删除成功"):t.msgError("删除失败"),t.getList()})).catch((function(a){t.msgError("删除失败"),t.$refs[e].doClose(),t.loading=!1}))},getList:function(){var e=this;this.loading=!0,Object(i["e"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.configList=t.rows,e.total=t.total,e.loading=!1}))},typeFormat:function(e,t){return this.selectDictLabel(this.typeOptions,e.configType)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={id:void 0,configName:void 0,configKey:void 0,configValue:void 0,configType:"Y",remark:void 0},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleAdd:function(){this.reset(),this.open=!0,this.title="添加参数"},handleUpdate:function(e){var t=this;this.reset(),Object(i["c"])(e.id).then((function(e){t.form=e.data,t.open=!0,t.title="修改参数"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?Object(i["f"])(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):Object(i["a"])(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.configName+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(i["b"])(e.id)})).then((function(e){200==e.code?t.msgSuccess("删除成功"):t.msgError("删除失败"),t.getList()})).catch((function(){}))}}},l=n,s=a("2877"),c=Object(s["a"])(l,r,o,!1,null,null,null);t["default"]=c.exports}}]);