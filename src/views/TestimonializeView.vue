<template>
  <div class="container">
    <h2 class="display-2 text-center mb-5">Testimonials</h2>
    <div class="row">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div class="card border-0 shadow-sm">
          <div class="card-body text-center">
            <img :src="testimonial.image" :alt="testimonial.name" class="rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;">
            <h5 class="mb-1">{{ testimonial.name }} <a :href="testimonial.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a></h5>
            <h6 class="mb-3">{{ testimonial.role }}</h6>
            <p class="card-text"><em>"{{ testimonial.message }}"</em></p>
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
    ...mapState(['testimonials'])
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
