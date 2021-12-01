import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ExampleComponent from './components/ExampleComponent.vue'
import HeaderExample from './components/HeaderExample.vue'
import Welcome from './components/Welcome.vue'

const app = createApp({
    components: {
        App,
        ExampleComponent,
        HeaderExample,
        Welcome,
    },
})
app.use(router)
app.mount('#app')
