<template>
  <div
    v-if="show"
    class="loader"
  >
    <img
      :src="loader"
      alt="Loading..."
    >
  </div>
</template>

<script>
import loader from '../../assets/loader.gif';

export default {
	name: 'Loader',
	data() {
		return {
			loader,
			show: true,
		};
	},
	mounted() {
		if (this.show) this.showToggle();
	},
	methods: {
		showToggle() {
			setTimeout(() => {
				this.show = false;
			}, 3000);
		},
	},
};
</script>

<style lang="scss">

.loader {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeOut 2s;
    animation-fill-mode: forwards;

    @keyframes fadeOut {
        100% {
            opacity: 0;
            visibility: hidden;
        }
    }
}

</style>
