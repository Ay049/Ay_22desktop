<template>
  <div id="category">
    <NavBar class="categoryTop">
      <template #center>
        <div>分类</div>
      </template>
    </NavBar>
    <div class="content">
      <TabMenu
        :categories="categories"
        @selectItem="selectItem"
        @rightScroll="rightScroll"
      ></TabMenu>
      <Scroll id="tab-content" :data="[categoryData]" ref="scroll" @scroll="contentScroll">
        <TabContentCategory :subcategories="showSubcategory"></TabContentCategory>
      </Scroll>
      <BackTop @click="backClick" v-show="isShowBackTop">
          <img src="~@/assets/images/sImages/common/top.png" alt="" />
      </BackTop>
    </div>
  </div>
</template>

<script>
import NavBar from '../../sComponents/sCommon/navbar/NavBar.vue'
import TabMenu from './childComps/TabMenu.vue'
import Scroll from '../../sComponents/sCommon/scroll/Scroll.vue'
import TabContentCategory from './childComps/TabContentCategory.vue'
import { getCategory, getSubcategory } from '@/network/sShopping/category'
import { backTopMiXin } from '../../sCommon/mixin' // 封装的返回置顶
export default {
  name: 'Category',
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory
  },
  mixins: [backTopMiXin],
  data () {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      isShowBackTop: false
    }
  },
  created () {
    // 1.请求分类数据
    this._getCategory()
  },
  methods: {
    contentScroll (position) {
      // 置顶的显示和隐藏
      this.listShowBackTop(position)
    },
    _getCategory () {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {}
          }
        }
        this._getSubcategories(0)
      })
    },
    _getSubcategories (index) {
      this.currentIndex = index
      const mailKey = this.categories[index].maitKey
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = { ...this.categoryData }
      })
    },
    /**
     * 事件响应相关的方法
     */
    selectItem (index) {
      this._getSubcategories(index)
    },
    rightScroll () {
      this.$refs.scroll.refresh()
    }
  },
  computed: {
    showSubcategory () {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.categoryTop {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 20;
  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.05);
}
.content {
  height: 100vh;
  display: flex;
}
#tab-content {
  height: calc(100% - 44px - 49px);
  flex: 1;
}
</style>
