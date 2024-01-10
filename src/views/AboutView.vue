<template>
  <div class="about">
    <h1>About Me</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4 order-md-2">
          <div class="card border-radius-10px">
            <img id="about-image" class="card-img-top" src="https://i.postimg.cc/jSjN25mc/419043.png" alt="Card image cap">
            <div class="card-body">
              <div class="social-links">
                <a href="your-social-media-link"><i class="fa fa-facebook"></i></a>
                <a href="your-social-media-link"><i class="fa fa-instagram"></i></a>
                <a href="your-social-media-link"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <strong>
                  <h4 id="purple-name">MeSelf Details</h4>
                </strong>
              </h5>
              <h5 v-if="aboutMe">Full name:</h5> <p v-if="aboutMe">{{ aboutMe.fullName }}</p>
              <h5 v-if="aboutMe">Date of birth:</h5> <p v-if="aboutMe">{{ aboutMe.dateOfBirth }}</p>
              <h5 v-if="aboutMe">Location:</h5> <p v-if="aboutMe">{{ aboutMe.location }}</p>
              <h5 v-if="aboutMe">Cell Phone number:</h5> <p v-if="aboutMe">{{ aboutMe.cellPhoneNumber }}</p>
              <h5 v-if="aboutMe">Email Address:</h5> <p v-if="aboutMe">{{ aboutMe.emailAddress }}</p>
              <p class="card-text">
                <small id="purple-name"><button class="btn btn-outline-success" href="your-cv-link" target="_blank">Download CV</button></small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 order-md-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <strong>
                  <h4 id="purple-name">Bio</h4>
                </strong>
              </h5>
              <p class="card-text" v-if="aboutMe">
                {{ aboutMe.bio }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

let store = useStore()
let aboutMe = computed(()=> store.state.about)

onMounted(()=> {
  store.dispatch('fetchAbout');
})
</script>
