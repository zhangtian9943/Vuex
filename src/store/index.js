import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import demoGet from './modules/demoGet'
import getters from './getters'

Vue.use(Vuex)

const store = new Store({
	modules: {
		demoGet
	},
	getters
})

export default store