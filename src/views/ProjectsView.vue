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

              <div class="reaction-icon" @click="reactToProject(project)" :class="{ 'reacted': project.reacted }">
                <i class="bi bi-heart" :style="{ color: project.reacted ? 'red' : 'black' }"></i>
                <span v-if="project.reactionCount > 0">{{ project.reactionCount }}</span>
              </div>
              <button @click="leaveComment(project)" class="comment-button">
                Leave a Comment
              </button>

              <!-- View Count -->
              <div class="view-count">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img"
                  aria-label="View Count">
                  <path
                    d="M9.5,13 L15,13 C15.5522847,13 16,12.5522847 16,12 L16,12 L16,5 C16,4.44771525 15.5522847,4 15,4 L15,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,12 C3,12.5522847 3.44771525,13 4,13 L7,13 L7,15.5 L9.5,13 Z M15.0081158,13.973325 L10,13.973325 L7.42191625,16.5445317 C6.63661359,17.3277395 6,17.0667904 6,15.9700713 L6,13.973325 L3.99188419,13.973325 C2.89179693,13.973325 2,13.0706688 2,11.979044 L2,4.994281 C2,3.89287002 2.89339733,3 3.99188419,3 L15.0081158,3 C16.1082031,3 17,3.90265618 17,4.994281 L17,11.979044 C17,13.0804549 16.1066027,13.973325 15.0081158,13.973325 Z">
                  </path>
                </svg>

                <span>{{ project.views }}</span> views
              </div>
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
    },
    reactToProject(project) {
      project.reacted = !project.reacted;
      if (project.reacted) {
        project.reactionCount++;
      } else {
        project.reactionCount--;
      }
    },
    leaveComment(project) {
      console.log('Leaving a comment on project:', project);
      // Add your logic here to handle leaving a comment on the project
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

.reaction-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.reaction-icon i {
  margin-right: 5px;
}
</style>
