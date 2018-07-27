import Vue from 'vue'
import Vuex, { Store } from 'vuex' // 这里不太明白
import demoGet from './modules/demoGet'
import events from './modules/events'
import getters from './getters'

Vue.use(Vuex)

const store = new Store({
	modules: {
		demoGet,
		events
	},
	getters
})

export default store