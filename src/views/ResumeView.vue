<template>
  <div id="app">
    <h1 class="py-4 text-center" style="padding-top: 20px; padding-bottom: 20px; border-bottom:solid 2px; font-family: sans-serif -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;" id="purple-name">Experience</h1>
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
import resumeData from '../store/index';

export default {
  name: 'ResumeView',
  data() {
    return {
      resume: resumeData,
    };
  },
};
</script>
