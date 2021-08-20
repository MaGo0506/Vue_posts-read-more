import home from './components/Pages/Home/Home.vue';
import addPost from './components/Pages/AddPost/AddPost.vue';
import showPosts from './components/Pages/Posts/ShowPosts.vue';

export default [
	{ path: '/', component: home },
	{ path: '/posts/add', component: addPost },
	{ path: '/posts', component: showPosts },
];
