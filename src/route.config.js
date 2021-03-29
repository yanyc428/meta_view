import VueRouter from 'vue-router'

import index from "@/components/index.vue"
const routes = [
    {path: '/', redirect: '/index'},
    {path: '/index', name: "index", component: index}
]

const router = new VueRouter({
    routes
})
export default router