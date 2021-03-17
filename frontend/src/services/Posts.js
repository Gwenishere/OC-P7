import axios from "axios";

const baseUrl = "http://localhost:3000/user/post";

export const getPosts = () =>
	axios.get(`${baseUrl}/getPosts`, {
		headers: {
			Authorization: localStorage.getItem("token")
		}
	});

export const getPost = UserId =>
	axios.get(`${baseUrl}/user/${UserId}`, {
		headers: {
			Authorization: localStorage.getItem("token")
		}
	});

export const addPost = formData =>
	axios.post(`${baseUrl}/new`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: localStorage.getItem("token")
		}
	});

export const moderate = id =>
	axios.put(`${baseUrl}/${id}/moderate`, {
		headers: {
			Authorization: localStorage.getItem("token")
		}
	});

export const deletePost = id =>
	axios.delete(`${baseUrl}/${id}`, {
		headers: {
			Authorization: localStorage.getItem("token")
		}
	});