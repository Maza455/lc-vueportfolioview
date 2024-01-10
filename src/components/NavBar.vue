<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/">
        <img class="logo img-fluid" src="../assets/Proctor.png">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active"> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link" href="#">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/project" class="nav-link" href="#">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link" href="#">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" href="#">Reach Me</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<!-- <script>
    export default {
        
    }
</script> -->

<style scoped>
.logo {
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  float: left;
  object-fit: fill;
  transform: scale(1);
  transition-property: width;
  transform: translateY(0px);
  transition-duration: 5s, 5s;
  transition: transform 4s, 4s;
}

</style>