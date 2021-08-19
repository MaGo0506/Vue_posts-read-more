import home from './components/home/home.vue';
import addPost from './components/addPost/addPost.vue';
import showPosts from './components/posts/showPosts.vue';

export default [
	{ path: '/', component: home },
	{ path: '/posts/add', component: addPost },
	{ path: '/posts', component: showPosts },
];
