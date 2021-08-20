<template>
  <div id="app">
    <loader />
    <router-view />
  </div>
</template>

<script>
import loader from './components/Common/Loader.vue';

export default {
	name: 'App',
	components: {
		loader,
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background: rgb(131,58,180);
  color: #fff;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%,
  rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
}

</style>
