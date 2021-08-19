/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { firestoreAction, vuexfireMutations } from 'vuexfire';
import { postsCollection } from '../fireBase';

Vue.use(Vuex, axios);

const customSerializer = (doc) => {
	const data = doc.data();
	Object.defineProperty(data, '_doc', { value: doc });
	Object.defineProperty(data, 'id', { value: doc.id, enumerable: true });
	return data;
};

export const store = new Vuex.Store({
	state: {
		allPosts: [],
		postsBatch: [],
		loadMoreLastPost: null,
		morePostsPending: true,
	},
	actions: {
		getPostsBatch: firestoreAction((context, payload) => context
			.bindFirestoreRef(
				'postsBatch',
				postsCollection
					.orderBy('pinned', 'desc')
					.limit(payload.limit)
					.startAfter(context.state.loadMoreLastPost || 3),
				{ serialize: customSerializer },
			)
			.then((posts) => {
				if (posts.length > 0) {
					context.commit('MERGE_POSTS_BATCH', { posts });
					context.commit('SET_LOADMORE_LAST');
				}
				if (posts.length < payload.limit) context.commit('ALL_POSTS_LOADED');
			})),
	},
	mutations: {
		...vuexfireMutations,

		MERGE_POSTS_BATCH(state, payload) {
    		state.allPosts = state.allPosts.concat(payload.posts);
		},
		SET_LOADMORE_LAST(state) {
			state.loadMoreLastPost = state.allPosts[state.allPosts.length - 1]._doc;
			state.postsBatch = [];
		},
		ALL_POSTS_LOADED(state) {
			state.morePostsPending = false;
		},
		RESET_ALL(state) {
			state.allBooks = [];
			state.booksBatch = [];
			state.loadMoreLastBook = null;
			state.moreBooksPending = true;
		},
	},
	getters: {
		allPosts: (state) => state.allPosts,
		morePosts: (state) => state.morePostsPending,
	},
});
