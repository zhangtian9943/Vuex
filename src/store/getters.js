const getters = {
	count: state => state.demoGet.count,
	name: state => state.demoGet.name,
	age: state => state.demoGet.age,
	sex: state => state.demoGet.sex,
	talkOnce: state => state.events.talkOnce,
	talkTwice: state => state.events.talkTwice,
	talkThird: state => state.events.talkThird
}

export default getters