<template>
<section v-if="project" >
    <h1>{{ project.nome_progetto }}</h1>
  
  <div>
    <img :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top">
  </div>
  <div v-if="project.category">
    <h5>Category: {{ project.category.nome_categoria }}</h5>
   </div>
   <div v-if="project.technologies && project.technologies.length > 0">
    <h5>Technology</h5>
    <div>
        <span v-for="(technology,index) in project.technologies" :key="index" class="badge text-bg-info">{{ technology.nome_technology }}</span>
    </div>
   </div>
  
</section> 
</template>

<script>
  import axios from 'axios';
    import { store } from '../store';
    export default {
        name:'Project',
        data(){
            return {
                store,
                project: null,
            }
        },
        methods:{
            getProject(){
                console.log(this.$route)
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response)=>{
                    console.log( this.project = response.data.results)
                    if(response.data.success){
                        console.log(response.data.results);
                        this.project = response.data.results;
                    } else {
                        //console.log(this.$router);
                        this.$router.push({name: 'not-found'});
                    }
                      
            })}
        },
        mounted(){
            this.getProject();
        }

    }
</script>

<style lang="scss" scoped>
img{
    width: 400px;
}
</style>