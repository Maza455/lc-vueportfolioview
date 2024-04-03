<template>
    <div>
      <h1 class="py-4 text-center" id="purple-name">Skills</h1>
      <div class="card-container">
        <div v-for="(skill, index) in resume.skills" :key="index" class="card">
          <div class="card-image">
            <img :src="skill.image" alt="Skill Image">
          </div>
          <div class="card-info">
            <h3>{{ skill.position }}</h3>
            <p>{{ skill.summary }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';

  export default {
    computed: {
    ...mapState(['resume', 'errorMessage'])
  },
  mounted() {
    try {
      this.$store.dispatch('fetchData');
    } catch (error) {
      alert.error('An error occurred while fetching the data: ', error);
      this.$store.commit('setErrorMessage', 'An error occurred while fetching the data. Please try again later.');
    }
  }
};
  </script>
  
  <style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  flex: 1 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .card {
    flex: 1 0 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
  }
}

@media (max-width: 767px) {
  .card {
    flex: 1 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  .card img {
    height: 150px;
    margin-bottom: 10px;
  }

  .card h3 {
    font-size: 1.2em;
  }

  .card p {
    font-size: 0.9em;
  }
}
</style>