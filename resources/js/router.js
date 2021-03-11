import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['auth/authenticated']) {
        next()
        return
    }
    next({name: 'pageLogin'})
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/authenticated']) {
        next()
        return
    }
    next({name: 'pageLogin'})
}

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                {
                    path: '/',
                    // redirect: '/dashboard',
                    name: 'home',
                    // component: Public,
                    beforeEnter: ifAuthenticated,
                    component: () => import('./views/Main'),
                    meta: {
                        // rule : '*',
                    },
                },
                {
                    path: '/categories',
                    name: 'categories',
                    component: () => import('./views/categories/Category.vue'),
                    // beforeEnter: ifAuthenticated,
                    meta: {
                        pageTitle: 'Category',
                    },
                },
                {
                    path: '/books',
                    name: 'books',
                    component: () => import('./views/books/Books.vue'),
                    // beforeEnter: ifAuthenticated,
                }
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/login',
                    name: 'pageLogin',
                    component: () => import('./views/auth/Login.vue'),
                    beforeEnter: ifNotAuthenticated,
                },
                // {
                //     path: '/register',
                //     name: 'pageRegister',
                //     component: () => import('@/views/app/Register.vue')
                // },
                {
                    path: '/error-404',
                    name: 'pageError404',
                    component: () => import('./views/Error404.vue'),
                },
            ],
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/error-404',
        },
    ],
})

// router.beforeEach(() => {
// Remove initial loading
// const appLoading = document.getElementById('loading-bg')
// if (appLoading) {
//     appLoading.style.display = "none";
// }
// });
// router.afterEach(() => {
// Remove initial loading
// const appLoading = document.getElementById('loading-bg')
// if (appLoading) {
//     appLoading.style.display = "none";
// }
// });

export default router
