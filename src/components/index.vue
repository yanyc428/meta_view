<template>
  <div>

<!--这里修改背景图-->
    <div class="mod_search" role="search"
         style="background-image:url(http://gxmz.art.bift.edu.cn/app/images/mainbg.jpg);">
      <!--      <div class="mod_search_input">-->
      <!--        <input  class="search_input__input" aria-label="请输入搜索内容" type="text" placeholder="请输入搜索内容">-->
      <!--        <button  class="search_input__btn"><i class="icon_search sprite"></i><span-->
      <!--            class="icon_txt">搜索</span>-->
      <!--        </button>-->
      <!--      </div>-->
      <el-form style="padding-top: 255px; margin: 0 auto;">
        <el-form-item style="padding-left: 35%;">
          <el-input style="width: 40%;height: 50px; " v-model="text" >
            <i slot="suffix" class="el-icon-search el-input__icon"></i>
          </el-input>
          <el-button size="medium" style="margin-left: 20px;" type="primary" @click="dialogVisible=true">高级筛选</el-button>
        </el-form-item>
      </el-form>



    </div>

    <div style="width: 55%; margin:0 auto; padding-top: 40px;">
      <el-divider content-position="center" style="background-color:#E9E9E9;">为您推荐</el-divider>
      <el-row>
        <el-col :span="4" v-for="(o, index) in phase1" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.img" class="image">
            <div style="padding: 14px;">
              <span>{{ o.name }}</span>
              <div class="bottom clearfix">
                <time class="time">{{o.description}}</time>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" v-for="(o, index) in phase2" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.img" class="image">
            <div style="padding: 14px;">
              <span>{{ o.name }}</span>
              <div class="bottom clearfix">
                <time class="time">{{o.description}}</time>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4" v-for="(o, index) in phase3" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;padding-bottom: 30px;">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.img" class="image">
            <div style="padding: 14px;">
              <span>{{ o.name }}</span>
              <div class="bottom clearfix">
                <time class="time">{{o.description}}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-divider content-position="center" style="background-color:#E9E9E9; margin-bottom: 20px;"><el-link href="#" target="_blank">加载更多</el-link></el-divider>
    </div>

    <el-dialog
        :visible.sync="dialogVisible"
        title="高级筛选"
        width="40%">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="出版时间" name="1">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="出版机构" name="2">
          <el-button v-for="x in departments" :key="x" size="mini"> {{x}}</el-button>
        </el-collapse-item>
        <el-collapse-item title="出版地区" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="学科" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销,回退和终止当前操作等。</div>
        </el-collapse-item>
        <el-collapse-item title="责任者" name="5">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="学制" name="6">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="审定机构" name="7">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="学习者类别" name="8">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="教育类型" name="9">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="性别" name="10">
        <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="适用年级" name="11">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="适用范围" name="12">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="主题" name="13">
          <div>与现实生活一致：与现实生活的流程,逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式,图标和文本,元素的位置等。</div>
        </el-collapse-item>
      </el-collapse>
      <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false" style="margin-top: 20px;">
        {{tag}}
      </el-tag>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">应用</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import config from "@/config";

export default {
  name: "index",
  data() {
    return {
      background: config.index.bgc,
      dialogVisible: false,
      activeName: '2',
      dynamicTags: config.index.dynamicTags,
      text: "",
      departments: config.index.departments,
      phase1: config.index.phase1,
      phase2: config.index.phase2,
      phase3: config.index.phase3,
    }
  }
}
</script>

<style>
/*.el-input >>> .el-input__inner {*/
/*  background-color: rgba(0, 0, 0, 0.1);*/
/*  color:#fff;*/
/*}*/
html {
  display: block;
}

.mod_search {
  position: relative;
  height: 550px;
  background-position: 50%;
  background-size: cover;
}

div {
  display: block;
}

/*body {*/
/*    background-color: #fafafa;*/
/*}*/
.mod_search .mod_search_input, .mod_search .search_input__input {
  width: 554px;
  height: 50px;
}

.mod_search .mod_search_input {
  border: 0 none;
  padding: 0 70px 0 15px;
  line-height: 50px;
  left: 50%;
  top: 225px;
  margin-top: 0;
  margin-left: -322px;
  background: #fff;
}

.mod_search_input {
  border: 1px solid #c9c9c9;
  padding: 0 33px 0 11px;
  line-height: 36px;
  height: 36px;
  margin-top: 26px;
  position: relative;
  border-radius: 3px;
  background-color: #fff;
  -webkit-transition: width .6s ease-out;
  transition: width .6s ease-out;
}

.mod_search .mod_search_input, .mod_search .search_input__input {
  width: 554px;
  height: 50px;
}

blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, input, lengend, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
}

.mod_search .search_input__btn {
  width: 50px;
  height: 50px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.search_input__btn {
  position: absolute;
  top: 0;
  right: 0;
  border: 0 none;
  width: 38px;
  height: 35px;
  overflow: visible;
  background: 0 0;
}

button {
  cursor: pointer;
}

body, button, input, select, textarea, th {
  color: #000;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-family: poppin, Tahoma, Arial, \5FAE\8F6F\96C5\9ED1, sans-serif;
  font-family: Tahoma, Arial, \5FAE\8F6F\96C5\9ED1, sans-serif/9;
}

blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, html, input, lengend, li, ol, p, pre, td, textarea, th, ul {
  margin: 0;
  padding: 0;
}

.icon_search {
  position: absolute;
  top: 50%;
  right: 11px;
  margin-top: -8px;
  width: 16px;
  height: 16px;
  background-position: 0 -40px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.el-divider__text{
  background-color: transparent;
}
</style>
