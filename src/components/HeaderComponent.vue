<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li  class="nav-item" v-for="item in menuItems" >
         <router-link :to="{name: item.routeName} " class="nav-link">
        {{ item.label }}
        </router-link>

        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </header>
</template>

<script>
import HomePage from '../pages/HomePage.vue';

    export default {
        name:'AppHeader',
        data(){
            return{
                menuItems:[
                    {
                        label:'Home',
                        routeName:'home',
                    },
                    {
                        label:'Projects',
                        routeName:'projects',
                    },
                    {
                        label:'Contact',
                        routeName:'contact',
                    },
                ]
            }
    }
    }
</script>

<style lang="scss" scoped>

</style>