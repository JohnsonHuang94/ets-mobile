<template>
  <div id="app">
    <div>{{userInfo}}</div>
    <Button @click="setUserInfo">修改用户信息</Button>
    <HelloEts></HelloEts>
    <tabs>
      <tab title="page1" to="/page1"></tab>
      <tab title="page2" to="/page2"></tab>
    </tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloEts from "./components/HelloEts.vue"
import { tabs, tab, Button} from 'vant'
import { getUserInfo, setUserInfo } from '@/api/user'
export default {
  name: 'App',
  components: {
    HelloEts,
    tabs,
    tab,
    Button
  },
  data() {
    return {
      userInfo: {}
    }
  },
  mounted() {
    this.getUserInfo()
    this.getUserInfo()
    this.getUserInfo()
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      getUserInfo().then(res => {
        if(res.code === 0){
          console.log(res.data)
          this.userInfo = res.data
        }
      })
    },
    setUserInfo() {
      setUserInfo({name: '测试'}).then(res => {
        if(res.code === 0) {
          this.userInfo = res.data
        }
      })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16Px;
}
</style>
