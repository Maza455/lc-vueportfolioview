<template>
  <div id="app">
    <h1 class="py-4 text-center" id="purple-name">Experience</h1>
    <div class="container">
      <div class="main-timeline">

        <!-- Work Experience -->
        <div v-for="(item, index) in resume.work" :key="index">
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">{{ item.startDate }} - {{ item.endDate }}</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h4>{{ item.company }}</h4>
              <h5 id="purple-name" class="title">{{ item.position }}</h5>
              <p class="description">{{ item.summary }}</p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div v-for="(item, index) in resume.education" :key="index">
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <span class="month">{{ item.startDate }} - {{ item.endDate }}</span>
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h4>{{ item.institution }}</h4>
              <h5 id="purple-name" class="title">{{ item.area }}</h5>
              <p class="description">{{ item.studyType }}</p>
            </div>
          </div>
        </div>
        <hr>

        <!-- Skills -->
        <div class="skills">
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
      console.error('An error occurred while fetching the data: ', error);
      this.$store.commit('setErrorMessage', 'An error occurred while fetching the data. Please try again later.');
    }
  }
};
</script>

<style scoped>
.py-4 {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 2px;
  font-family: sans-serif -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.timeline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.timeline .icon {
  display: none;
}

.timeline .date-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.timeline .date-outer:before,
.timeline .date-outer:after {
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s;
}

.timeline .date-outer:before {
  background: #fff;
  border: 2px solid #232323;
  left: -6px;
}

.timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px;
}

.timeline .date-outer:hover:before {
  left: 6px;
}

.timeline .date-outer:hover:after {
  left: -6px;
}

.timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0;
}

.timeline .month {
  font-size: 18px;
  font-weight: 700;
}

.timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px;
}

.timeline .timeline-content {
  padding: 20px;
  float: none;
  width: 100%;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 1 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
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
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    flex: 1 0 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
  }
}

@media (max-width: 767px) {
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    flex: 1 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}
</style>
