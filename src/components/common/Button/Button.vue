<template>
  <button
    :id="btnId"
    :type="button"
    :class="`btn ${classType}`"
    :disabled="disabled"
    @click="$emit('click-event')"
  >
    {{ btnText }}
  </button>
</template>

<script>

export default {
	name: 'Button',
	props: {
		classType: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		btnId: {
			type: String,
			default: '',
		},
		btnText: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'button',
		},
	},
	data() {
		return {
		};
	},
};
</script>

<style lang="scss" scoped>

.btn {
    display: block;
      margin: 20px auto;
      background: crimson;
      width: 200px;
      color: #fff;
      border: 0;
      padding: 14px;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: orangered;
      }
}

</style>
