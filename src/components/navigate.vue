<template>
  <div style="width: 75%; margin: 0 auto;">
    <div class="header-back"
         style="background-image: url(http://gxmz.art.bift.edu.cn/media/system/people/ed0718b5b8c7003eae8b2254d25968a3.jpg);">
    </div>
    <div class="mf-container">
      <div class="page-intro">
        <div class="title ng-binding">壮族</div>
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
        中等尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="x in departments" :key="x">{{x}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
        中等尺寸
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
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;">
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
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;">
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
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0"  style="padding-top: 30px;">
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
export default {
  name: "navigate",
  data(){
    return{
      time: ['1900','1901','1902','1903','1904','1905','1906','1907','1908','1909','1911','1912','1913','1914','1915'],
      departments: ['商务印书馆','中华书局','文明书局','开明书店','世界书局','大光书局','文艺书局','民智书局','北新学社','著者自刊','中学生书局'],
      area: ['华北','东北','华东','华中','华南','西南','西北','港澳地区'],
      province: ['北京','天津','河北','陕西','内蒙古','辽宁','吉林','黑龙江','上海'],
      city:['南京','无锡','徐州','常州','苏州','南通','连云港']
    }
  }
}
</script>

<style scoped>
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
