<template>
  <div>
    `<div style="width: 75%; margin: 0 auto;">`
    <div class="header-back" style="background-image: url(http://gxmz.art.bift.edu.cn/media/system/people/ed0718b5b8c7003eae8b2254d25968a3.jpg);">
      <!--     在此处修改背景图    -->
    </div>
    <div class="mf-container">
      <div class="page-intro">
        <div class="title ng-binding">词共现</div>
        <!--        在此处修改描述-->
      </div>
    </div>
    <div style="width: 80%;">
      在此处插入html代码
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "word_absence"
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
</style>