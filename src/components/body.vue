<template>

    <el-container id="system__container" >
      <el-header id="system__header" height="60px">
      <div id="system__nav__bar">

          <el-menu router class="el-menu-demo" text-color="#090909"  mode="horizontal">
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
                  <el-submenu index="1-3-2-1">
                    <template slot="title">普通教育</template>
                    <el-menu-item index="1-3-2-1-1">学前教育</el-menu-item>
                    <el-menu-item index="1-3-2-1-2">初等小学教育</el-menu-item>
                    <el-menu-item index="1-3-2-1-3">高等小学教育</el-menu-item>
                    <el-menu-item index="1-3-2-1-4">初等中学教育</el-menu-item>
                    <el-menu-item index="1-3-2-1-5">高等中学教育</el-menu-item>
                  </el-submenu>
                  <el-menu-item index="1-3-2-2">职业教育</el-menu-item>
                  <el-menu-item index="1-3-2-3">师范教育</el-menu-item>
                  <el-menu-item index="1-3-2-4">其他</el-menu-item>
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
              <el-menu-item index="2-1" route="/number-analysis-time">时间分布</el-menu-item>
              <el-menu-item index="2-2"  route="/number-analysis-space">空间分布</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">关系图谱</template>
              <el-menu-item index="3-1"  route="/network">责任者合作网络</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">文本分析</template>
              <el-menu-item index="4-1" route="/wordcloud">词云图</el-menu-item>
              <el-menu-item index="4-2" route="/word-absence">词共现</el-menu-item>
              <el-menu-item index="4-3" route="/topic-analysis">主题分析</el-menu-item>
            </el-submenu>
          </el-menu>
          <div id="system__avatar">
            <el-button id="system__logout__button" type="info">注 册</el-button>
            <el-button id="system__logout__button2" type="primary">登 录</el-button>
          </div>
      </div>
        </el-header>



      <el-main  id="system__main">
          <router-view></router-view>
      </el-main>
    </el-container>

</template>

<script>
export default {
name: "body"
}
</script>

<style scoped>
#system__nav__bar {
  height: 100%;
  border-bottom: solid 2px #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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
#system__avatar {
  padding-right: 40px;
  border-bottom-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#system__logout__button {
  padding-left: 20px;
  margin-left: 20px;
}
#system__logout__button2 {
  padding-left: 20px;
  margin-left: 20px;
}
</style>
