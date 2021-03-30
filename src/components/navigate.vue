<template>
  <div style="width: 75%; margin: 0 auto;">
    <div class="header-back"
         style="background-image: url(http://gxmz.art.bift.edu.cn/media/system/people/ed0718b5b8c7003eae8b2254d25968a3.jpg);">
    </div>
    <div class="mf-container">
      <div class="page-intro">
        <div class="title ng-binding">壮族</div>
        <div class="detail ng-binding">
          壮族是我国少数民族中人口最多的民族。广西壮族常住人口约占全区总人口的32%，约占全国壮族总人口的86%。主要分布在南宁、柳州、百色、河池、来宾、崇左、防城港、贵港、钦州等市。壮族是一个历史悠久的民族，从壮族聚居的柳江、来宾等地发现大量原始文化遗址，证明远在旧石器时代的后期，这一带就有人类居住。据古籍记载，最早居住在今广西境内的有“百越”族群中的“西瓯”、“骆越”等部落，今天的壮族就是由这些部落发展而来的。壮族的自称有20多种。新中国建立后，统一称为“僮”，后改为“壮”。
        </div>
        <div class="more ng-binding">&gt;&gt; 展开更多</div>
      </div>
    </div>
    <el-divider direction="horizontal" style="padding-top: 20px;background-color: transparent;"></el-divider>
    <div align="right">
      <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
        中等尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
        中等尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
        中等尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div style="width:80%;margin:0 auto; padding-top: 40px;" >
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
export default {
  name: "navigate"
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
</style>
