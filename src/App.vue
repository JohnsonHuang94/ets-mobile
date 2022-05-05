<template>
  <div id="app">
    <div>{{userInfo}}</div>
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
import { tabs, tab} from 'vant'
import { mapState } from 'vuex'
import { getUserInfo } from "./api/user"
export default {
  name: 'App',
  components: {
    HelloEts,
    tabs,
    tab,
  },
  data() {
    return {}
  },
  mounted() {
    getUserInfo().then(res => {
      this.$store.commit('changeUserInfo', res.data)
    })
  },
  methods: {
    
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
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
