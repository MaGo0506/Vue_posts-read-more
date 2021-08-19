<template>
  <div id="add-post">
    <nav>
      <router-link
        class="router-link"
        :to="`/`"
      >
        Home
      </router-link>
      <router-link
        class="router-link"
        :to="`/posts`"
      >
        Posts
      </router-link>
    </nav>
    <h2 v-if="!submitted">
      Add a New Post
    </h2>
    <form v-if="!submitted">
      <label>Post Title:</label>
      <input
        v-model.lazy="post.title"
        type="text"
        required
      >
      <label>Post Content:</label>
      <textarea v-model.lazy.trim="post.content" />
      <div id="checkbox">
        <label>Pin This Post</label>
        <input
          v-model="post.pinned"
          type="checkbox"
          required
        >
      </div>
      <label>Author:</label>
      <input
        v-model="post.author"
        required
        type="text"
      >
      <hr>
      <button
        type="submit"
        @click.prevent="addPost"
      >
        Add Post
      </button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
  </div>
</template>

<script>
import { postsCollection } from '../../fireBase';

export default {
	data() {
		return {
			post: {
				title: '',
				content: '',
				pinned: false,
				author: '',
			},
			submitted: false,
		};
	},
	methods: {
		addPost() {
			if (this.post.title !== '' && this.post.content !== '') {
				if (this.post.author !== '') {
					postsCollection.add({
						title: this.post.title,
						content: this.post.content,
						author: this.post.author,
						pinned: this.post.pinned,
					})
						.then(() => {
							console.log('Document successfully written!');
						})
						.catch((error) => {
							console.error('Error writing document: ', error);
						});
					this.submitted = true;
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';

#add-post {
    margin: 50px auto;
    max-width: 600px;
    padding: 20px;

    label {
      display: block;
      margin: 20px 0 10px;
    }

    input[type="text"], textarea, select{
      display: block;
      width: 100%;
      padding: 8px;
    }

    textarea {
      height:200px;
    }

    #preview {
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
    }

    h3 {
      margin-top: 10px;
      text-align: center;
    }

    #checkbox input {
      display: inline-block;
      margin-right: 10px;
    }

    #checkbox label {
      display: inline-block;
      margin-top: 20px;
    }

    hr {
      display: none;
    }

    button{
      display: block;
      margin: 20px auto;
      background: crimson;
      width: 150px;
      color: #fff;
      border: 0;
      padding: 14px;
      border-radius: 4px;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: orangered;
      }
    }
}

</style>
