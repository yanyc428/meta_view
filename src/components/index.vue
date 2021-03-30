<template>
  <div>


    <div class="mod_search" style="background-image:url(http://gxmz.art.bift.edu.cn/app/images/mainbg.jpg);" role="search">
<!--      <div class="mod_search_input">-->
<!--        <input  class="search_input__input" aria-label="请输入搜索内容" type="text" placeholder="请输入搜索内容">-->
<!--        <button  class="search_input__btn"><i class="icon_search sprite"></i><span-->
<!--            class="icon_txt">搜索</span>-->
<!--        </button>-->
<!--      </div>-->
      <el-form style="padding-top: 255px; margin: 0 auto;">
      <el-form-item style="padding-left: 30%;">
        <el-input style="width: 40%;height: 50px;">
          <i class="el-icon-search el-input__icon"  slot="suffix"></i>
        </el-input>
        <el-button type="primary" size="medium" style="margin-left: 20px;">高级筛选</el-button>
      </el-form-item>
      </el-form>


    </div>

    <div style="width: 50%; margin:0 auto; padding-top: 40px;" >
      <el-divider content-position="center" >为您推荐</el-divider>
      <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0" style="padding-top: 30px;">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">lalalallalalalalala</time>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0" style="padding-top: 30px;">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">lalalallalalalalala</time>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0" style="padding-top: 30px;">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">lalalallalalalalala</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>


  </div>
</template>

<script>
import config from "@/config";
export default {
  name: "index",
  data(){
    return{
      background: config.index_background
    }
  }
}
</script>

<style>
.el-input__inner {
  background-color:rgba(0,0,0,0.1);
}
html{
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
  font-family: poppin,Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
  font-family: Tahoma,Arial,\5FAE\8F6F\96C5\9ED1,sans-serif/9;
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

</style>
