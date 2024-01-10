<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Testimonials</h2>
      <div v-for="(testimonial, index) in testimonials" :key="index" class="col-lg-6 col-md-6 col-sm-12">
        <div class="testimonial-card">
          <img :src="testimonial.image" :alt="testimonial.name" class="rounded-circle">
          <h5>{{ testimonial.name }} <a :href="testimonial.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a></h5>
          <h6>{{ testimonial.role }}</h6>
          <p><em>"{{ testimonial.message }}"</em></p>
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
@media (max-width: 576px) {
  .col-lg-6,
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
