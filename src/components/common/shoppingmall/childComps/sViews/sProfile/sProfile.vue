<template>
  <div id="profile">
    <NavBar class="profileTop">
      <template #center>
        <div>个人中心</div>
      </template>
    </NavBar>
    <User></User>
    <section class="account">
      <div class="account-item">
        <div class="number"><span class="balance">8.00</span>元</div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>个</div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">999</span>分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <ListView></ListView>
  </div>
</template>

<script>
import NavBar from '../../sComponents/sCommon/navbar/NavBar.vue'
import User from './childCopms/User.vue'
import ListView from './childCopms/ListView.vue'

export default {
  name: 'Profile',
  components: {
    NavBar,
    User,
    ListView
  }
}
</script>

<style scoped>
.profileTop {
  background-color: var(--color-tint);
  color: #fff;

  box-shadow: 0 2px 1px rgba(100, 100, 100, 0.05);
}

.account {
  display: flex;
  padding: 8px 0 4px 0;
}

.account :last-child {
  border-right: solid 1px #fff;
}

.account-item {
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-size: 14px;
  padding: 20px;
  border-right: solid 1px #f2f2f2;
  color: #666;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}
</style>
