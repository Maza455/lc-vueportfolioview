<template>
  <div id="app">
    <h1 class="py-4 text-center"
      style="padding-top: 20px; padding-bottom: 20px; border-bottom:solid 2px; font-family: sans-serif -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
      id="purple-name">Experience</h1>
    <div class="container">
      <div class="main-timeline">
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
  }
}
</script>

<style scoped>
#purple-name {
  color: blueviolet;
  font-family: sans-serif -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.main-timeline {
  position: relative;
}

.main-timeline .timeline {
  margin-bottom: 40px;
  position: relative;
}

.main-timeline .timeline:after {
  content: "";
  display: block;
}

.main-timeline .icon {
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.main-timeline .icon:before,
.main-timeline .icon:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .icon:before {
  background: #fff;
  border: 2px solid #232323;
  left: -3px;
}

.main-timeline .icon:after {
  border: 2px solid #c6c6c6;
  left: 3px;
}

.main-timeline .timeline:hover .icon:before {
  left: 3px;
}

.main-timeline .timeline:hover .icon:after {
  left: -3px;
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;
}

.main-timeline .date-content:before {
  content: "";
  width: 36.5%;
  height: 2px;
  background: #c6c6c6;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #232323;
  left: -6px;
}

.main-timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px;
}

.main-timeline .date-outer:hover:before {
  left: 6px;
}

.main-timeline .date-outer:hover:after {
  left: -6px;
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right;
}

.main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
}

.main-timeline .description {
  margin-bottom: 0;
}

.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right;
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;
}

.main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px;
}
</style>