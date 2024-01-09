<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Reach Me</h2>
      </div>
      <div class="row" style="border:solid  1px; padding-top:10px ;  padding-bottom:10px; border-radius: 20px;">
        <div class="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="https://formspree.io/f/xnqklpew" method="POST">
            <!-- Your form input fields here -->
          </form>
          <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
          </div>
          <div class="status"></div>
        </div>
        <div style="border:solid  1px; padding-top:10px ;;  border-radius: 50px;" class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <p> {{ ReachMe.address }}</p>
            </li>
            <li>
              <p> {{ ReachMe.phoneNumber }}</p>
            </li>
            <li>
              <i class="fas fa-envelope mt-4 fa-2x"></i>
              <p> {{ ReachMe.email }} </p>
            <div> {{ ReachMe.social }} </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      ReachMe() {
        return this.$store.state.ReachMe;
      }
    },
    mounted() {
      this.$store.dispatch('fetchReachMe');
    }
  }
  </script>
  
  <style scoped>
    /* Your existing styles */
  </style>
  