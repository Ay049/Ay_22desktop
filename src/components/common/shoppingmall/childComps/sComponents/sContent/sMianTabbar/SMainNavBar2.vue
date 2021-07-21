<template>
  <div>
    <NavBar class="sNavBar">
      <TabBarItem class="tab-bar-item" path="/home/shome">
        <template #item-icon>
          <img src="~@/assets/images/sImages/tabbar/shouye.svg" alt="" />
        </template>
        <template #item-icon-active>
          <img src="~@/assets/images/sImages/tabbar/shouye-b.svg" alt="" />
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </TabBarItem>

      <TabBarItem class="tab-bar-item" path="/home/scategory">
        <template #item-icon>
          <img src="~@/assets/images/sImages/tabbar/fenlei.svg" alt="" />
        </template>
        <template #item-icon-active>
          <img src="~@/assets/images/sImages/tabbar/fenlei-b.svg" alt="" />
        </template>
        <template #item-text>
          <div>推荐</div>
        </template>
      </TabBarItem>

      <TabBarItem class="tab-bar-item" path="/home/scart">
        <template #item-icon>
          <img src="~@/assets/images/sImages/tabbar/gouwuche.svg" alt="" />
        </template>
        <template #item-icon-active>
          <img src="~@/assets/images/sImages/tabbar/gouwuche-b.svg" alt="" />
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>

      <TabBarItem class="tab-bar-item" path="/home/sprofile">
        <template #item-icon>
          <img src="~@/assets/images/sImages/tabbar/wode.svg" alt="" />
        </template>
        <template #item-icon-active>
          <img src="~@/assets/images/sImages/tabbar/wode-b.svg" alt="" />
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </NavBar>
  </div>
</template>

<script>
// 导入导航栏模块
import NavBar from '@/components/content/mainnavbar/NavBar.vue'
import TabBarItem from '@/components/content/mainnavbar/NavBarItem.vue'

export default {
  name: 'NavTabBar',
  components: {
    NavBar,
    TabBarItem
  }
}
</script>

<style scoped>
  .sNavBar {
    display: flex;
    background-color: #f6f6f6;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    /* 一般都为49 */
    height: 49px;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.2);
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
