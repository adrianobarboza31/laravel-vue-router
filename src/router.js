import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import Project from './pages/Project.vue'
import NotFound from './pages/NotFound.vue'
import Contact from './pages/Contact.vue'

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomePage
        },
        {
            path:'/projects',
            name:'projects',
            component:ProjectList
        },
        {
            path:'/projects/:slug',
            name:'single-project',
            component:Project
        },
        {
            path:'/contact',
            name:'contact',
            component:Contact
        },
        {
            path:'/*',
            name:'not-found',
            component:NotFound
        },

    ]
})

export {router}