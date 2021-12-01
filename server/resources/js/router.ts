import { createRouter, createWebHistory } from 'vue-router'
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
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
