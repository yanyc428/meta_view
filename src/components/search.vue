<template>
  <el-container id="system__container">
    <el-header id="system__header" height="60px">
      <el-menu class="el-menu-demo" mode="horizontal" router text-color="#090909">
        <el-submenu index="1">
          <template slot="title">分类导航</template>
          <el-submenu index="1-1">
            <template slot="title">学科</template>
            <el-menu-item index="1-1-1" route="/navigate">国文</el-menu-item>
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
        <el-menu-item>
          <el-input v-model="text" style="width: 400px;">
            <i slot="suffix" class="el-icon-search el-input__icon"></i>
          </el-input>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main id="system__main">
      <div style="width: 75%; margin: 0 auto;">
      <div class="header-back" style="background-image: url(http://gxmz.art.bift.edu.cn/media/system/people/ed0718b5b8c7003eae8b2254d25968a3.jpg);">
        <!--     在此处修改背景图    -->
      </div>
      <div class="mf-container">
        <div class="page-intro">
          <div class="title ng-binding">国文</div>
          <!--        在此处修改描述-->
        </div>
      </div>

        <el-table :data="tableData" stripe style="width: 60%; margin: 20px auto; ">
          <el-table-column prop="title" label="标题" style="width: 20%;" sortable></el-table-column>
          <el-table-column prop="charge" label="责任者" style="width: 20%;" sortable></el-table-column>
          <el-table-column prop="publish" label="出版机构" style="width: 20%;" sortable></el-table-column>
          <el-table-column prop="location" label="出版地" style="width: 20%;" sortable></el-table-column>
          <el-table-column prop="suit" label="适用对象" style="width: 20%;" sortable></el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import config from "@/config";

export default {
  name: "search",
  data() {
    return {
      text: "国文",
      tableData: config.search.tableData
    }
  }
}
</script>

<style>
.header-back {
  width: 1200px;
  height: 520px;
  margin: auto;
}
.el-input__inner {
  background-color: #E9E9E9;
  color: #000;
}
#system__header {
  padding: 0 0;
  margin: 0;
}

#system__container {
  padding: 0 0;
  margin: 0;
  height: 100%;
}

#system__main {
  padding: 0 0;
  margin: 0;
}
.mf-container {
  width: 100%;
  margin:0 auto;
}
.page-intro {
  margin-top: 20px;
  border-bottom: 1px solid #c9cac7;
  padding-bottom: 25px;
}
.page-intro .title {
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
}
.page-intro .detail {
  line-height: 2;
  max-height: 110px;
  overflow: hidden;
  margin-bottom: 5px;
  text-align: justify;
}
.page-intro .more {
  float: right;
  color: #3c51ac;
  cursor: pointer;
}
</style>