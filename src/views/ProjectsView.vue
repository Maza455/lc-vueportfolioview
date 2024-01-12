<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Projects</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="project in projects" :key="project.id" class="col col-md-12 col-md-4 col-lg-4">
          <div class="card h-100">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.githubLink" target="_blank"><button>Github</button></a>
              <a :href="project.liveDemoLink" target="_blank" @click="openProject(project.liveDemoLink)"><button>{{
                project.liveDemoText }}</button></a>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                <a :href="project.authorGithub" target="_blank"><i class="bi bi-github" style="font-size: 2em;"></i></a>
              </button>
              <small class="text-muted">Last updated {{ project.lastUpdated }}</small>
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
    ...mapState(['homeView', 'aboutMe', 'testimonials', 'projects', 'contact', 'resume'])
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
  methods: {
    openProject(url) {
      this.$router.push({ name: 'Project', params: { projectUrl: url } });
    }
  }
}
</script>

<style scoped>
/*Portfolio CSS*/
#portfolio-page {
  padding-top: 150px;
  padding-bottom: 150px;
  padding-left: 150px;
  padding-right: 150px;
}

#portfolio-row {
  padding-top: 19px;
  padding-bottom: 19px;
}

#portfolio-image {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
</style>
