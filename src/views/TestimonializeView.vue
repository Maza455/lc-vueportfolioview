<template>
  <div class="container">
    <h2 class="display-2 text-center mb-5">Testimonials</h2>
    <div class="row">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="col-lg-6 col-md-6 col-sm-12 mb-4"
      >
        <div class="card border-0 shadow-sm testimonial-card">
          <div class="card-body text-center">
            <div
              class="spinner"
              @mouseover="showText = true"
              @mouseleave="showText = false"
            >
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="rounded-circle spinner-image"
                style="width: 150px; height: 150px; object-fit: cover"
              />
              <div v-if="showText" class="spinner-text">
                <h5>
                  {{ testimonial.name }}
                  <a :href="testimonial.linkedin" target="_blank"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                </h5>
                <h6>{{ testimonial.role }}</h6>
                <p>
                  <em>"{{ testimonial.message }}"</em>
                </p>
                <div class="like-section">
                <button class="btn btn-light btn-sm" @click="toggleLike(testimonial.id, index)">
                  <i class="bi" :class="getLikeIconClass(testimonial.id, index)"></i>
                </button>
                <span>{{ testimonial.count }}</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="errorMessage" class="alert alert-danger mt-5" role="alert">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      showText: false,
      likedTestimonials: [],
      likesCount: {},
    };
  },
  computed: {
    ...mapState(["testimonials", "errorMessage"]),
  },
  methods: {
    toggleLike(testimonialId, index) {
      const testimonial = this.testimonials[index];
      testimonial.liked = !testimonial.liked;
      testimonial.liked ? testimonial.count++ : testimonial.count--;
    },
    getLikeIconClass(testimonialId, index) {
      const testimonial = this.testimonials[index];
      return {
        'bi-hand-thumbs-up': !testimonial.liked,
        'bi-hand-thumbs-up-fill': testimonial.liked
      };
    }
  },
  mounted() {
    this.$store.dispatch('fetchData')
      .catch(error => {
        console.log(error);
        this.$store.commit('setErrorMessage', 'Hey there are no testimonials, please try again later.');
      });
  }
}

</script>

<style scoped>
.testimonial-card {
  position: relative;
}

.spinner {
  position: relative;
}

.spinner-image {
  transition: transform 0.5s;
}

.spinner-text {
  display: none;
}

.spinner-thumb {
  cursor: pointer;
}

.spinner:hover .spinner-image {
  transform: rotateY(180deg);
}

.spinner:hover .spinner-text {
  display: block;
}

.like-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>