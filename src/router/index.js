import Vue from 'vue'
import Router from 'vue-rouer'
import vuexDemo from '../components/vuexDemo.vue'
import testDemo from '../components/testDemo.vue'
Vue.use(Router)

export default new Router({
	routers: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWord
		},
		{
			path: '/vue',
			name: 'vuexDemo',
			component: vuexDemo
		}
	]
})