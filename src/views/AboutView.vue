<template>
  <div class="about">
    <h1>About Me</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4 order-md-2">
          <div class="card border-radius-10px">
            <img id="about-image" class="card-img-top" src="your-image-source.jpg" alt="Card image cap">
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
                  <h4 id="purple-myname">MeSelf Details</h4>
                </strong>
              </h5>
              <h5>Full name:</h5> {{ aboutMe.fullname }}
              <h5>Date of birth:</h5> {{ aboutMe.dateOfBirth }}
              <h5>Location:</h5> {{ aboutMe.location }}
              <h5>Cell Phone number:</h5> {{ aboutMe.cellPhoneNumber }}
              <h5>Email Address:</h5> {{ aboutMe.emailAddress }}
              <p class="card-text">
                <small id="purple-myname"><button class="btn btn-outline-success" href="your-cv-link" target="_blank">Download CV</button></small>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 order-md-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <strong>
                  <h4 id="purple-myname">Bio</h4>
                </strong>
              </h5>
              <p class="card-text">
                {{ aboutMe.bio }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe;
    }
  },
  mounted() {
    this.$store.dispatch('fetchAbout');
  }
}
</script>
