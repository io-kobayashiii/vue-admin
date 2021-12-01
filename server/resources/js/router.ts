// import Vue from 'vue'
// import VueRouter from 'vue-router'

// import Hello from './components/pages/Hello.vue'
// import NotFound from './components/pages/NotFound.vue'

// Vue.use(VueRouter)

// const routes = [
//     {
//         path: '*',
//         name: 'notfound',
//         component: NotFound
//     },
//     {
//         path: '/',
//         name: 'hello',
//         component: Hello,
//     }
// ]

// const router = new VueRouter({
//     mode: 'history',
//     routes
// })

// export default router

import { createRouter, createWebHashHistory } from 'vue-router';
import Hello from './components/pages/Hello.vue'
import HelloExample from './components/pages/HelloExample.vue'

const routes = [
    {
        path: '/',
        name: 'hello',
        component: Hello,
    },
    {
        path: '/example',
        name: 'example',
        component: HelloExample,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;