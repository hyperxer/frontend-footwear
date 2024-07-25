import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['appVersion'] = '1.1.0';
Vue.prototype.$axios = axios;