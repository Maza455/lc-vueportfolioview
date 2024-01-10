<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <img
          id="landing-photo"
          class="img-responsive img-fluid"
          :src="homeView.image"
          alt=""
        />
      </div>
      <div class="col-lg-6">
        <div class="px-4 py-5 text-center">
          <h1 id="purple-name" class="display-5 fw-bold">
            <b>{{ homeView.name }}</b>
          </h1>
          <div class="hero-text text-dark text-size-50px lead mb-4">
            <p>{{ homeView.title }}</p>
            <p>{{ homeView.services }}</p>
            <p>To know more about MeSelf, <a :href="homeView.linkedin">Let's connect</a>!</p>
            <div class="d-grid gap-2 d-flex justify-content-center">
              <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                <a class="button-link button-link-github" :href="homeView.github" target="_blank">
                  Click Me!<i class="bi bi-github" style="font-size: 2em;"></i>
                </a>
              </button>
              <button type="button" class="btn btn-muted btn-lg gap-2">
                <a class="button-link button-link-linkedin" :href="homeView.linkedin" target="_blank">
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
import homeViewData from "@/store/index";

export default {
  data() {
    return {
      homeView: homeViewData.homeView,
    };
  },
};
</script>
