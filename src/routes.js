import home from './components/pages/home/Home.vue';
import addPost from './components/pages/addPost/AddPost.vue';
import showPosts from './components/pages/posts/ShowPosts.vue';

export default [
	{ path: '/', component: home },
	{ path: '/posts/add', component: addPost },
	{ path: '/posts', component: showPosts },
];
