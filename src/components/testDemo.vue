<template>
	<div style="margin-top: 45px">
		<h3>寂静的教室，突然有人说话</h3>		
		<button @click="sayWord('1')">张三说：</button><span>{{sayOne}}</span><br>
		<button @click="sayWord('2')">李四说：</button><span>{{sayTwo}}</span><br>
		<button @click="sayWord('3')">王麻子：</button><span>{{sayThree}}</span><br>
		<h3>老师说：你们在说什么？</h3>
		<button @click="changeData('我没说')">回答</button>

		<!-- <p>:{{$store.state.talkOnce}}</p> -->
	</div>
	

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	data () {
		return {
			sayOne: '',
			sayTwo: '',
			sayThree: ''
		}
	},
	computed: {
		...mapGetters(['talkOnce', 'talkTwice', 'talkThird'])
	},
	methods: {
		...mapActions([
			'sayWhat'
		]),
		sayWord(name) {
			if(name === '1') {
				this.sayOne = this.talkOnce
				console.log(this.talkOnce)
			} else if(name === '2') {				
				this.sayTwo = this.talkTwice
			} else {
				this.sayThree = this.talkThird
			}
		},
		changeData(data) {
			this.sayWhat(data)
			// this.$root.Bus.$emit('studentSay', data)
		}
	}

}
</script>

