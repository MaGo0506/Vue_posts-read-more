<template>
  <div id="showPosts">
    <nav>
      <router-link
        class="router-link"
        :to="`/`"
      >
        Home
      </router-link>
      <router-link
        class="router-link"
        :to="`/posts/add`"
      >
        Add Post
      </router-link>
    </nav>
    <h1>All Blog Articles</h1>
    <div
      v-for="post in allPosts"
      :key="post.id"
      class="post"
    >
      <h3 class="post__title">
        {{ post.title }}
      </h3>
      <div
        v-if="post.pinned"
        class="pinned"
      >
        <p class="pinned__text">
          Pinned
        </p>
        <img
          v-if="post.pinned"
          class="pinned__image"
          :src="pin"
        >
      </div>
      <p class="post__content">
        {{ post.content }}
      </p>
      <blockquote class="post__author">
        Author: {{ post.author }}
      </blockquote>
    </div>
    <Button
      v-if="morePosts"
      :btn-text="text"
      @click-event="loadMore"
    />
    <p
      v-else
      class="noPosts"
    >
      There are no more Posts to load
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import pin from '../../assets/pin.png';
import Button from '../common/button.vue';

export default {
	components: {
		Button,
	},
	data() {
		return {
			pin,
			text: 'Show More Posts',
		};
	},
	computed: {
		...mapGetters(['allPosts', 'morePosts']),
	},
	mounted() {
		this.$store.commit('RESET_ALL');
		this.$store.dispatch('getPostsBatch', { limit: 10 });
	},
	methods: {
		loadMore() {
			this.$store.dispatch('getPostsBatch', { limit: 5 });
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

#showPosts {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        text-align: center;
        margin: 80px auto;
    }

    .post {
        background-color: rgb(247, 232, 232);
        width: 850px;
        margin: 10px auto;
        padding: 10px;
        position: relative;

        .post__title, .post__content, .post__author{
            background: -webkit-linear-gradient(to right, #FCB045 0%, #fd1d1d 50%, #833AB4 100%);
            background: -moz-linear-gradient(to right, #FCB045 0%, #fd1d1d 50%, #833AB4 100%);
            background: linear-gradient(to right, #FCB045 0%, #fd1d1d 50%, #833AB4 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .button {
        width: 150px;
        margin: 20px auto;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 22px;
        width: 30%;
    }

    .noPosts {
        text-align: center;
        font-size: 24px;
    }

    .pinned {
        display: flex;
        position: absolute;
        top: 5px;
        right: 10px;

        .pinned__text {
            background: -webkit-linear-gradient(to right, #FCB045 0%, #fd1d1d 50%, #833AB4 100%);
            background: -moz-linear-gradient(to right, #FCB045 0%, #fd1d1d 50%, #833AB4 100%);
            background: linear-gradient(to right, #FCB045 0%, #fd1d1d 50%, #833AB4 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 20px;
            padding-right: 10px;
        }

        .pinned__image {
            height: 30px;
            width: 30px;
        }
    }
}

</style>
