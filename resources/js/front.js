window.axios = require('axios');
window.Vue = require('vue');
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import App from './views/App';
import router from './router.js';


const app = new Vue({
    el:'#root',
    render: h => h(App),
    router
});