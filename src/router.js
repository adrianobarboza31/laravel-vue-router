import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import Project from './pages/Project.vue'
import NotFound from './pages/NotFound.vue'

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
            path:'/projects/:id',
            name:'single-project',
            component:Project
        }

    ]
})

export {router}