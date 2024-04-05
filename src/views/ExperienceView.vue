<template>
  <div>
    <h1 class="py-4 text-center" id="purple-name">Experience</h1>
    <div class="container">
      <div class="main-timeline">
        <div v-for="(item, index) in resume.work" :key="index" :class="'timeline' + (index + 1)">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">{{ item.startDate }} - {{ item.endDate }}</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h4>{{ item.company || item.institution }}</h4>
            <h5 id="purple-name" class="title">{{ item.position || item.area }}</h5>
            <p class="description">{{ item.summary || item.studyType }}</p>
            <h6 class="descript">{{ item.subjects }}</h6>
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
      alert.error('An error occurred while fetching the data: ', error);
      this.$store.commit('setErrorMessage', 'An error occurred while fetching the data. Please try again later.');
    }
  }
};
</script>

<style scoped>
.main-timeline {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
  justify-content: center;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "timeline1"
    "timeline2"
    "timeline3"
    "timeline4"
    "timeline5"
    "timeline6";
}

@media screen and (min-width: 768px) {
  .main-timeline {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "timeline1 timeline2"
      "timeline3 timeline4"
      "timeline5 timeline6";
  }
}

.timeline {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  position: relative;
  align-items: center;
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
  display: flex;
  align-items: center;
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

.timeline .timeline-content {
  padding: 20px;
  float: none;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .timeline .date-outer {
    width: 100px;
    height: 100px;
  }

  .timeline .date {
    top: 35%;
  }

  .timeline .month {
    font-size: 16px;
  }
}
</style>
