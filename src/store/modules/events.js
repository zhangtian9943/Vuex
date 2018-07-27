const events = {
  state: {
		talkOnce: '当山峰没有棱角的时候',
		talkTwice: '当河水不在转动',
		talkThird: '无息佳佳会'
	},
	mutations: {
		SAY_WHAT: (state, data) => {
			state.talkOnce = data
			state.talkTwice = data
			state.talkThird = data
		}
	},
	actions: {
		sayWhat( {commit}, data) {
			commit('SAY_WHAT', data)
			// this.$root.Bus.$emit('studentSay', data)
		}
	}
}

export default events