import VueRouter from 'vue-router'

import index from "@/components/index.vue"
import navigate from "@/components/navigate";
import body from "@/components/body";
import search from "@/components/search";
const routes = [
    {path: '/', redirect: '/index'},
    {path: "/body", name: "body", component: body, redirect:"/index", children: [
        {path: '/index', name: "index", component: index},
            {path: '/navigate', name: "navigate", component: navigate}
    ]},
    {path: '/search', name: "search", component: search}
]

const router = new VueRouter({
    routes
})
export default router
