import axios from "axios";

window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


