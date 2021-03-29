<template>
  <div>


    <el-menu  class="el-menu-demo" mode="horizontal">
      <el-submenu index="1">
        <template slot="title">分类导航</template>
        <el-submenu index="1-1">
          <template slot="title">学科</template>
          <el-menu-item index="1-1-1">国文</el-menu-item>
          <el-menu-item index="1-1-2">数学</el-menu-item>
          <el-menu-item index="1-1-3">公民</el-menu-item>
          <el-menu-item index="1-1-4">社会</el-menu-item>
          <el-menu-item index="1-1-5">理化</el-menu-item>
          <el-menu-item index="1-1-6">历史</el-menu-item>
          <el-menu-item index="1-1-7">地理</el-menu-item>
          <el-menu-item index="1-1-8">修身</el-menu-item>

          <el-menu-item index="1-1-9">自然</el-menu-item>
          <el-menu-item index="1-1-10">常识</el-menu-item>
          <el-menu-item index="1-1-11">劳作</el-menu-item>
          <el-menu-item index="1-1-12">美术</el-menu-item>
          <el-menu-item index="1-1-13">体育</el-menu-item>
          <el-menu-item index="1-1-14">卫生</el-menu-item>
          <el-menu-item index="1-1-15">音乐</el-menu-item>
          <el-menu-item index="1-1-16">英语</el-menu-item>
          <el-menu-item index="1-1-17">生物</el-menu-item>
          <el-menu-item index="1-1-18">其他</el-menu-item>
        </el-submenu>

        <el-submenu index="1-2">
          <template slot="title">学制</template>
          <el-menu-item index="1-2-1">癸卯学制</el-menu-item>
          <el-menu-item index="1-2-2">壬子癸丑学制</el-menu-item>
          <el-menu-item index="1-2-3">壬戌学制</el-menu-item>
          <el-menu-item index="1-2-4">其他</el-menu-item>
        </el-submenu>

        <el-submenu index="1-3">
          <template slot="title">适用对象</template>
          <el-submenu index="1-3-1">
            <template slot="title">学习者类别</template>
            <el-menu-item index="1-3-1-1">学生</el-menu-item>
            <el-menu-item index="1-3-1-2">教师</el-menu-item>
            <el-menu-item index="1-3-1-3">教育管理人员</el-menu-item>
            <el-menu-item index="1-3-1-4">家长</el-menu-item>
            <el-menu-item index="1-3-1-5">学龄前儿童</el-menu-item>
            <el-menu-item index="1-3-1-6">不分年龄的人</el-menu-item>
          </el-submenu>

          <el-submenu index="1-3-2">
            <template slot="title">教育类型</template>
            <el-menu-item index="1-3-2-1">学前教育</el-menu-item>
            <el-menu-item index="1-3-2-2">初等小学教育</el-menu-item>
            <el-menu-item index="1-3-2-3">高等小学教育</el-menu-item>
            <el-menu-item index="1-3-2-4">初等中学教育</el-menu-item>
            <el-menu-item index="1-3-2-5">高等中学教育</el-menu-item>
            <el-menu-item index="1-3-2-6">职业教育</el-menu-item>
            <el-menu-item index="1-3-2-7">师范教育</el-menu-item>
          </el-submenu>

          <el-submenu index="1-3-3">
            <template slot="title">性别</template>
            <el-menu-item index="1-3-3-1">男子</el-menu-item>
            <el-menu-item index="1-3-3-2">女子</el-menu-item>
            <el-menu-item index="1-3-3-3">不分性别的人</el-menu-item>
          </el-submenu>

          <el-submenu index="1-3-4">
            <template slot="title">适用年级</template>
            <el-menu-item index="1-3-4-1">一年级</el-menu-item>
            <el-menu-item index="1-3-4-2">二年级</el-menu-item>
            <el-menu-item index="1-3-4-3">三年级</el-menu-item>
            <el-menu-item index="1-3-4-4">四年级</el-menu-item>
            <el-menu-item index="1-3-4-5">五年级</el-menu-item>
            <el-menu-item index="1-3-4-6">六年级</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="1-4">
          <template slot="title">适用范围</template>
          <el-submenu index="1-4-1">
            <template slot="title">地理</template>
            <el-menu-item index="1-4-1-1">全国</el-menu-item>
            <el-menu-item index="1-4-1-2">地方</el-menu-item>
            <el-menu-item index="1-4-1-3">海外</el-menu-item>
          </el-submenu>

          <el-submenu index="1-4-2">
            <template slot="title">政治</template>
            <el-menu-item index="1-4-2-1">国民党统治区</el-menu-item>
            <el-menu-item index="1-4-2-2">汪伪国民政府</el-menu-item>
            <el-menu-item index="1-4-2-3">伪满洲国</el-menu-item>
            <el-menu-item index="1-4-2-4">中央苏区</el-menu-item>
            <el-menu-item index="1-4-2-5">根据地</el-menu-item>
            <el-menu-item index="1-4-2-6">解放区</el-menu-item>
            <el-menu-item index="1-4-2-7">其他</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="1-5">
          <template slot="title">审定机构</template>
          <el-menu-item index="1-5-1">清学部</el-menu-item>
          <el-menu-item index="1-5-2">教育部</el-menu-item>
          <el-menu-item index="1-5-3">晋绥边区教育处</el-menu-item>
          <el-menu-item index="1-5-4">其他</el-menu-item>
        </el-submenu>
      </el-submenu>


      <el-submenu index="2">
        <template slot="title">数量分析</template>
        <el-menu-item index="2-1">时间分布</el-menu-item>
        <el-menu-item index="2-2">空间分布</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">关系图谱</template>
        <el-menu-item index="3-1">责任者合作网络</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">文本分析</template>
        <el-menu-item index="4-1">词云图</el-menu-item>
        <el-menu-item index="4-2">词共现</el-menu-item>
        <el-menu-item index="4-3">主题分析</el-menu-item>
      </el-submenu>
    </el-menu>

    <div class="mod_search" style="background-image:url(http://gxmz.art.bift.edu.cn/app/images/mainbg.jpg);" role="search">
      <div class="mod_search_input">
        <input  class="search_input__input" aria-label="请输入搜索内容" type="text" placeholder="请输入搜索内容">
        <button  class="search_input__btn"><i class="icon_search sprite"></i><span
            class="icon_txt">搜索</span>
        </button>
      </div>
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

<style scoped>
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