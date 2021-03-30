import VueRouter from 'vue-router'

import index from "@/components/index.vue"
import navigate from "@/components/navigate";
import body from "@/components/body";
import search from "@/components/search";
import number_analysis_time from "@/components/number_analysis_time";
import number_analysis_space from "@/components/number_analysis_space";
import network from "@/components/network";
import wordcloud from "@/components/wordcloud";
import word_absence from "@/components/word_absence";
import topic_analysis from "@/components/topic_analysis";

const routes = [
    {path: '/', redirect: '/index'},
    {path: "/body", name: "body", component: body, redirect:"/index", children: [
            {path: '/index', name: "index", component: index},
            {path: '/navigate', name: "navigate", component: navigate},
            {path: '/number-analysis-time', name: "number-analysis-time", component: number_analysis_time},
            {path: '/number-analysis-space', name: "number-analysis-space", component: number_analysis_space},
            {path: '/network', name: "network", component: network},
            {path: '/wordcloud', name: "wordcloud", component: wordcloud},
            {path: '/word-absence', name: "word-absence", component: word_absence},
            {path: '/topic-analysis', name: "topic-analysis", component: topic_analysis},
    ]},
    {path: '/search', name: "search", component: search}
]

const router = new VueRouter({
    routes
})
export default router
