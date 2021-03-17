import axios from "axios";

const url = "http://localhost:3000/user/post";

export const handleNewComment = (post, newComment) =>
	axios.post(`http://localhost:3000/user/post/${post.id}/comment`, newComment, {
		headers: {
			Authorization: localStorage.getItem("token")
		}
	});

export const handleCommments = post =>
	axios.get(`${url}/${post.id}/comments`, {
		headers: {
			Authorization: localStorage.getItem("token")
		}
	});