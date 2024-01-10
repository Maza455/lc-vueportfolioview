<template>
  <section id="about-page" style="padding-top: 100px; padding-bottom: 130px;">
    <div class="container">
      <h1 class="text-center" id="about-heading"
        style="padding-top: 20px; padding-bottom: 20px; border-bottom: 2px solid; font-family: sans-serif; color: purple;">
        About Me</h1>
      <div class="row">
        <div class="col-md-4 order-md-2">
          <div class="card border-radius-10px">
            <img id="about-image" class="card-img-top" src="../assets/imgs/1662150356528 (1).jpg"
              alt="Card image cap"
              style="width: 400px; height: 500px; animation: changeColorTheme 5s linear infinite; max-height: 100%;">
            <div class="card-body">
              <div class="social-links">
                <a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a>
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
              <div class="card-text">
                <h5>Full name:</h5> Zukisa Eric Maza
                <h5>Date of birth:</h5> 05/03/****
                <h5>Location:</h5>Mitchel's plain, Cape Town, WC
                <h5>Cell Phone number:</h5>0723484826 | 0699950266
                <h5>Email Address:</h5> maza2pac77@gmail.com <br> eric.maza@umuzi.org
                <br>
                <span>⭐⭐⭐</span>
                <p class="card-text">
                  <small id="purple-myname"><a class="btn btn-outline-success"
                      href="https://i.postimg.cc/zGbL9HRy/Maza-CV-2023-K-1.png" target="_blank">Download CV</a></small>
                </p>
              </div>
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
                Hello! I'm Eric Zukisa Maza, I'm a keen learner and believe in an interdisciplinary approach to
                understanding the world and I am an ordinary person who has been blessed with extraordinary experiences.
                I'm a Xhosa guy who once studied Computer Science at the University of Western Cape, but not for long due
                to finances. Now I'm a good FullStack DEV at Life_Choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  setup() {

  }
}
</script>

<style scoped>
@keyframes changeColorTheme {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
