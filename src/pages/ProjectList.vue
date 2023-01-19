<template>
    <div>
       <h1>lista progetti</h1>
    </div>
    <div class="row d-flex">
        <div class="col-6" v-for="(project ) in projects" >
            <div class="card "  >
                <img :src="`${store.imagBasePath}${ project.cover_image }`" class="card-img-top" :alt="project.nome_progetto">
  <div class="card-body">
    <h5 class="card-title">{{ project.nome_progetto }}</h5>
 <router-link class="btn btn-primary" :to="{name:'single-project',params:{slug: project.slug}}"> 
    vedi il progetto
</router-link>
  </div>
</div>
        </div>
      
    </div>
</template>

<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
        name:'ProjectList',
        data(){
            return{
                store,
                projects:[],
                // currentPage: 1,
                // lastPage: null,
                // total: 0,
                contentMaxLen: 100
            }
        },
        methods:{
            getProject(){
                axios.get(`${this.store.apiBaseUrl}/projects`).then((response)=>{
                    console.log(response.data.results);
                   this.projects = response.data.results.data;
                //    this.currentPage = response.data.results.current_page;
                //    this.lastPage = response.data.results.last_page;
                //    this.total = response.data.results.total;
            })}
        },
        mounted(){
            this.getProject()
        }
    }
</script>

<style lang="scss" scoped>

</style>