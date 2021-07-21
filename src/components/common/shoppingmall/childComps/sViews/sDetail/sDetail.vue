<template>
  <div id="detail">
    <DetailTopBar
      class="topHome"
      @dtBar="dtBarClick"
      ref="dTop"
    ></DetailTopBar>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <div>
        <DetailSwiper :top-images="topImages" ref="swiper"></DetailSwiper>
        <DetailGoods :goods="goods"></DetailGoods>
        <DetailShop :shop="shop" ref="shop"></DetailShop>
        <DetailInfo
          :detail-info="detailInfo"
          @imageLoad="imageLoad"
        ></DetailInfo>
        <DetailParam :param-info="paramInfo" ref="param"></DetailParam>
        <DetailComment
          :comment-info="commentInfo"
          ref="comment"
        ></DetailComment>
        <!-- <goods-list :goods-list='recommends'></goods-list> -->
      </div>
    </scroll>
    <BackTop @click="backClick" v-show="isShowBackTop">
          <img src="~@/assets/images/sImages/common/top.png" alt="" />
    </BackTop>
    <detail-button @addCart="addCart"></detail-button>
  </div>
</template>

<script>
import Scroll from '../../sComponents/sCommon/scroll/Scroll.vue'
import { debounce } from '../../sCommon/utils' // 防抖节流相关
import { backTopMiXin } from '../../sCommon/mixin' // 封装的返回置顶
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam
  // getRecommend
} from '@/network/sShopping/detail'
// import GoodsList from '@/components/content/goods/GoodsList.vue'
import DetailTopBar from './childsComps/DetailTopBar.vue'
import DetailSwiper from './childsComps/DetailSwiper.vue'
import DetailGoods from './childsComps/DetailGoods.vue'
import DetailShop from './childsComps/DetailShop.vue'
import DetailInfo from './childsComps/DetailInfo.vue'
import DetailParam from './childsComps/DetailParam.vue'
import DetailComment from './childsComps/DetailComment.vue'
import DetailButton from './childsComps/DetailButton.vue'
export default {
  /*
   **详情页不要使用keep-alive，需要每次创建(created)
   **去<router-view/>那exclude
   */
  name: 'Detail',
  components: {
    Scroll,

    DetailTopBar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    DetailInfo,
    DetailParam,
    DetailComment,
    DetailButton
    // GoodsList,
  },
  mixins: [backTopMiXin],
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      // recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      curreyIndex: 0,
      isShowBackTop: false
    }
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    getDetail(this.iid).then((res) => {
      const data = res.result
      // 获取顶部轮播
      this.topImages = data.itemInfo.topImages
      // 获取商品基本信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品详情信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      // 保存评论(如果有)
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.shop.$el.offsetTop)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }, 100)

    // 请求详情页数据
    // getRecommend().then((res, err) => {
    //     if(err) return
    //     this.recommends = res.data.list
    // })
  },

  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    dtBarClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll (position) {
      this.listShowBackTop(position)
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.curreyIndex !== i &&
          -position.y >= this.themeTopYs[i] &&
          -position.y < this.themeTopYs[i + 1]
        ) {
          this.curreyIndex = i
          this.$refs.dTop.curreIndex = this.curreyIndex
        }
      }
    },
    addCart () {
      // 1.创建对象
      const obj = {}
      // 2.对象信息
      obj.iid = this.iid
      obj.imgURL = this.topImages[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc
      obj.newPrice = this.goods.nowPrice
      // 3.添加到Store中
      this.$store.dispatch('addCart', obj).then((res) => {
        // 调用自己封装的toast组件方法
        this.$toast.show(res, 2000)
        // this.$toast.setup(res)
      })
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 20;
}
.topHome {
  position: relative;
  background-color: #fff;
  z-index: 15;
}
.wrapper {
  height: calc(100% - 44px - 49px);
}
</style>
