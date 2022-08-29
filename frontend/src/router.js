import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from './views/LoginPage.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/login', name:'login', component: LoginPage },
        { path: '/', name:'home', component: Home },
    ]
});

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (to.matched.some(router => router.path !== '/login') && !token) {
        return next({path: '/login'});
    }

    return next();
})

export default router;