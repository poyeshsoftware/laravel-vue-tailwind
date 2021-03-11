import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret, faSpinner, faAngleDown, faAngleUp, faArrowDown,
    faHome, faList, faEdit, faBlog, faTrash, faArrowUp,faSignOutAlt,
    faTag, faUsers, faLock, faChartBar,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(faUserSecret, faSpinner, faAngleDown, faAngleUp, faHome, faList,faSignOutAlt,
    faEdit, faBlog, faTag, faUsers, faLock, faChartBar, faArrowDown, faTrash, faArrowUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

window.axios = require('axios');
Vue.prototype.$http = axios
window.axios.defaults.baseURL = document.head.querySelector('meta[name="api-base-url"]').content;
window.axios.defaults.withCredentials = true;

// ACL
// import acl from './acl'

// Vue Router
import router from './router'

// Vue store
import store from './store/index'

// i18n
import i18n from './i18n/i18n'

require('./store/subscriber');

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    new Vue({
        router,
        store,
        i18n,
        vuetify,
        // acl,
        render: h => h(App),
    }).$mount('#app')
})
