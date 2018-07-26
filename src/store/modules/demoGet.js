const demoGet = {
	state: {
		count: 0,
		name: 'zhang',
		sex: 'man',
		age: '18'
	},
	mutations: {
		ADD_Num: (state, num) => {
			state.count += 1
		}
	},
	actions: {
		addNum({ commit }, data) {
			console.log('我在demoGet里被触发了' + data)
			commit('ADD_Num', data)
		}
	}
}

export default demoGet