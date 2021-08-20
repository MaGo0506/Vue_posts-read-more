<template>
  <div>
    <nav>
      <router-link
        class="router-link"
        :to="`/posts/add`"
      >
        Add Post
      </router-link>
      <router-link
        class="router-link"
        :to="`/posts`"
      >
        Posts
      </router-link>
    </nav>
    <h1>Vue Posts Firebase</h1>
  </div>
</template>

<script>

export default {
	name: 'Home',
	data() {
		return {
		};
	},
	methods: {
	},
};
</script>

<style lang="scss" scoped>
@import '../../../scss/style.scss';

h1 {
    height: 500px;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
