<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <img
          id="landing-photo"
          class="img-responsive img-fluid"
          src="https://i.postimg.cc/rmYd2thr/1662150356528.jpg"
          alt=""
        />
      </div>
      <div class="col-lg-6">
        <div class="px-4 py-5 text-center">
          <h1 id="purple-myname" class="display-5 fw-bold">
            <b>Zukisa Maza</b>
          </h1>
          <div class="hero-text text-dark text-size-50px lead mb-4">
            <p>I am an Aspiring <b>Fullstack Developer</b>.</p>
            <p>I offer <b>WebSite's, Data fixing and Application's</b> services.</p>
            <p>To know more about MeSelf, <a href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/">Let's connect</a>!</p>
            <div class="d-grid gap-2 d-flex justify-content-center">
              <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                <a class="button-link button-link-github" href="https://github.com/Maza455" target="_blank">
                  Click Me!<i class="bi bi-github" style="font-size: 2em;"></i>
                </a>
              </button>
              <button type="button" class="btn btn-muted btn-lg gap-2">
                <a class="button-link button-link-linkedin" href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/" target="_blank">
                  <i class="bi bi-linkedin" style="font-size: 2em;"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h2 class="display-2">Welcome Ekhaya</h2>
    </div>
    <div class="row" v-if="jobTitle"></div>
    <p class="lead" v-for="title of jobTitle" :key="title.id">
      {{ title.title }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    jobTitle() {
      return this.$store.state.jobTitle
    }
  },
  mounted() {
    this.$store.dispatch('fetchJobTitle')
  }
}
</script>