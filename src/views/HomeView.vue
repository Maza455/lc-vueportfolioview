<template>
  <main id="home">
    <section id="landing-page" class="landing-animation bgimage" style="height: 100vh">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <!-- <img id="landing-photo" class="img-responsive img-fluid" src="../assets/imgs/1661850299234.jpg" alt="" /> -->
          </div>
          <div class="col-lg-6">
            <div class="px-4 py-5 text-center text-white"> <!-- Added text-white class to make the text white -->
              <h1 id="purple-myname" class="display-5 fw-bold">
                <b>Zukisa Eric Maza</b>
              </h1>
              <div class="hero-text text-dark text-size-50px lead mb-4">
                <p>I am an Aspiring <b>Fullstack Developer</b>.</p>
                <p>I offer <b>Website's, Data fixing and Application's</b> services.</p>
                <p>To know more about MeSelf, <a href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/">Let's connect</a>!</p>
              </div>
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
    </section>
  </main>
</template>

<style scoped>
.bgimage {
  background-image: url('../assets/imgs/1661850299234.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /* Add any other styles as needed */
}

.text-white {
  color: #fff; /* Set the text color to white */
}
</style>
