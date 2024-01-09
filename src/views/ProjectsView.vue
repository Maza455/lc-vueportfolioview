<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="project in projects" :key="project.id" class="col col-md-12 col-md-4 col-lg-4">
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ projects.title }}</h5>
                <p class="card-text">{{ projects.description }}</p>
                <a :href="projects.githubLink" target="_blank"><button>Github</button></a>
                <a :href="projects.liveDemoLink" target="_blank"><button>{{ projects.liveDemoText }}</button></a>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                  <a :href="projects.authorGithub" target="_blank"><i class="bi bi-github" style="font-size: 2em;"></i></a>
                </button>
                <small class="text-muted">Last updated {{ projects.lastUpdated }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['projects'])
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  