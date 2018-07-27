<template>
  <div>
    <span>numTest1:{{numTest1}}</span>
    <p>numTest2:{{numTest2}}</p>
    <button @click="getData">test1</button>
    <button @click="changeNum">test2</button>
    <br><br><br><br>
    <span>Vuex类似一个单例. 封装好后调用传参，执行写好的代码，对store(仓库)中的数据进行获取或者是修改 </span><br>
    <span>state: 存储初始化数据（对象）{name: 三， sex：男， age: 18}</span><br>
    <span>mutations: 对state中的数据进行修改 类似于computed</span><br>
    <span>getters: 对state里面的数据进行过滤,如：获取sate 中的name字段</span><br>
    <span>action:处理mutations中写好的方法</span><br><br><br><br>
    
    <!-- <button @click="studentSay">看看下面的同学在说什么</button> -->
    <span>{{studentTalk}}</span>
  </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      numTest1: 0,
      numTest2: 0,
      studentTalk: ''
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  mounted () {
    // this.$root.Bus.$on('studentSay', val => {
    //   this.studentTalk = val
    // })
  },
  methods: {
    ...mapActions([
      'addNum'
    ]),
    // 拿到flux中存储的数值
    getData() {
      this.numTest1 = this.count
      console.log(this.count)
    },
    // 修改flux中的数值
    changeNum(data) {
      this.addNum(data)
      this.numTest2 = this.count
    }
  }
}
</script>


