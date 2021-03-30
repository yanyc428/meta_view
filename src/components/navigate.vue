<template>
  <div>
    `<div style="width: 75%; margin: 0 auto;">`
      <div class="header-back" style="background-image: url(http://gxmz.art.bift.edu.cn/media/system/people/ed0718b5b8c7003eae8b2254d25968a3.jpg);">
        <!--     在此处修改背景图    -->
      </div>
      <div class="mf-container">
        <div class="page-intro">
          <div class="title ng-binding">国文</div>
          <!--        在此处修改描述-->
          <div class="detail ng-binding">
            壮族是我国少数民族中人口最多的民族。广西壮族常住人口约占全区总人口的32%，约占全国壮族总人口的86%。主要分布在南宁,柳州,百色,河池,来宾,崇左,防城港,贵港,钦州等市。壮族是一个历史悠久的民族，从壮族聚居的柳江,来宾等地发现大量原始文化遗址，证明远在旧石器时代的后期，这一带就有人类居住。据古籍记载，最早居住在今广西境内的有'百越'族群中的'西瓯','骆越'等部落，今天的壮族就是由这些部落发展而来的。壮族的自称有20多种。新中国建立后，统一称为'僮'，后改为'壮'。
          </div>
          <div class="more ng-binding">&gt;&gt; 展开更多</div>
        </div>
      </div>
      <el-divider direction="horizontal" style="padding-top: 20px;background-color: transparent;"></el-divider>
      <div align="right">
        <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
          出版时间
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="x in time" :key="x">{{x}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
          出版机构
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="x in departments" :key="x">{{x}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
          出版地
          <el-dropdown-menu slot="dropdown" style="width: 200px;">
            <el-menu unique-opened>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>按大区</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="x in area" :key="x">{{x}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>按行政区域</span>
                </template>
                <el-menu-item-group>
                  <el-submenu v-for="x in province" :key="x">
                    <template slot="title">{{x}}</template>
                  </el-submenu>
                  <el-submenu index="2-1">
                    <template slot="title">江苏</template>
                    <el-menu-item v-for="x in city" :key="x">{{x}}</el-menu-item>
                  </el-submenu>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div style="width:70%;margin:0 auto; padding-top: 40px;height: auto;" >
        <el-row>
          <el-col :span="4" v-for="(o, index) in phase1" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="o.img" class="image"  @click="dialogVisible=true">
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
              <img :src="o.img" class="image" @click="dialogVisible=true">
              <div style="padding: 14px;">
                <span>{{ o.name }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{o.description}}</time>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4" v-for="(o, index) in phase3" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;padding-bottom: 30px;">
            <el-card :body-style="{ padding: '0px' }" >
              <img :src="o.img" class="image" @click="dialogVisible=true">
              <div style="padding: 14px;">
                <span>{{ o.name }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{o.description}}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog
        :visible.sync="dialogVisible"
        title="共和国教科书新国文  第二册"
        width="40%">


          <el-card style="width: 50%; margin: 0 auto;">
            <img :src="example.img" class="image">
            <div style="padding: 14px;">
              <span style="font-size: 20px;">共和国教科书新国文  第二册</span>
              <div class="bottom clearfix">
                <div v-for="x in example.metadata" :key="x" class="text item">
                  {{x.key}} : {{x.value}}
                </div>
              </div>
            </div>
          </el-card>
      <el-divider content-position="center" style="background-color:#E9E9E9;">关联推荐</el-divider>


      <el-carousel :interval="4000" type="card" height="450px" style="width: 80%;margin: 0 auto;">
        <el-carousel-item v-for="x in recommend_img" :key="x" >
          <div style="width: 100%;display: flex;align-items: center">
            <img :src="x.img" class="rec_img"/>
          </div>
          <el-divider content-position="center" style="background-color:#E9E9E9;">{{ x.name }}</el-divider>
        </el-carousel-item>
      </el-carousel>
      <el-divider content-position="center" style="background-color:#E9E9E9;">{{ title }}</el-divider>


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">返 回</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import config from "@/config";

export default {
  name: "navigate",
  data(){
    return{
      dialogVisible: false,
      title: '',
      time: config.navigate.time,
      departments: config.navigate.departments,
      area: config.navigate.area,
      province: config.navigate.province,
      city:config.navigate.city,
      phase1: config.navigate.phase1,
      phase2: config.navigate.phase2,
      phase3: config.navigate.phase3,
      example:config.navigate.example,
      recommend_img:config.navigate.recommend_img
    }
  }
}
</script>

<style scoped>
.rec_img{
  height: 400px;
  width: 284px;
  margin: 0 auto;
  align-items: center;
}
/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #fff;*/
/*}*/
/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #fff;*/
/*}*/
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.header-back {
  width: 1200px;
  height: 520px;
  margin: auto;
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
.el-divider{
  background-color: transparent;
}
.el-submenu .el-menu-item {
  height: 35px;
  line-height: 35px;
}
.el-submenu__title {
  height: 40px;
  line-height: 40px;
}
</style>
