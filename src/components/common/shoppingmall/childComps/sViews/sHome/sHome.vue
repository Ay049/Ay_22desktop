<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <template #center>
        <div>Shopping street</div>
      </template>
    </nav-bar>
    <TabControl class="tabaaa" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></TabControl>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <HomeSwiper :banners="banners" @swiperImageLoad='swiperImageLoad'></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></TabControl>
      <GoodList :goods="showGoods"></GoodList>
    </scroll>
    <BackTop @click="backClick" v-show="isShowBackTop">
      <img src="~@/assets/images/sImages/common/top.png" alt="" />
    </BackTop>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import NavBar from '../../sComponents/sCommon/navbar/NavBar.vue'
import TabControl from '../../sComponents/sContent/tabControl/TabControl.vue'
import GoodList from '../../sComponents/sContent/goods/GoodsList.vue'
import Scroll from '../../sComponents/sCommon/scroll/Scroll.vue'
import { getHomeMultidata, getHomeGoods } from '@/network/sShopping/home'
import { debounce } from '../../sCommon/utils' // 防抖节流相关
import { backTopMiXin } from '../../sCommon/mixin' // 封装的返回置顶

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll
  },
  mixins: [backTopMiXin],
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.saveY = this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created () {
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    // 防抖节流相关
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('itemImageLoad', () => {
      console.log('aaaa')
      refresh()
    })
  },
  methods: {
    // 事件监听相关的方法
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 让两个tab保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll (position) {
      // 置顶的显示和隐藏
      this.listShowBackTop(position)
      // tab的显示和隐藏
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad () {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 网络请求相关的方法
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tabaaa {
    /* 滚动外的tabcontrol */
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
