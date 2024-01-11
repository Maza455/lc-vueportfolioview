<template>
  <main id="home">
    <section id="landing-page" class="landing-animation bgimage" style="height: 100vh; overflow: hidden"> <!-- Add overflow: hidden to prevent scrolling -->
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <a href="https://ibb.co/QYFvsx5"><img src="https://i.ibb.co/RQpTLJ5/Maza.jpg" alt="Maza" border="0" style="width: 100%; height: 100vh; object-fit: cover;"></a> <!-- Set image to cover the screen -->
          </div>
          <div class="col-lg-6">
            <div class="px-4 py-5 text-center text-black"> <!-- Change text color to black -->
              <h1 id="purple-myname" class="display-5 fw-bold">
                <b>Zukisa Eric Maza</b>
              </h1>
              <div class="hero-text text-dark text-size-50px lead mb-4">
                <p>I am an Aspiring <b>Fullstack Developer</b>.</p>
                <p>I offer <b>Website's, Data fixing and Application's</b> services.</p>
                <p>To know more about MeSelf, <a href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/" style="color: #000;">Let's connect</a>!</p> <!-- Set link color to black -->
              </div>
              <div class="d-grid gap-2 d-flex justify-content-center">
                <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                  <a class="button-link button-link-github" href="https://github.com/Maza455" target="_blank" style="color: #000;"> <!-- Set link color to black -->
                    Click Me!<i class="bi bi-github" style="font-size: 2em;"></i>
                  </a>
                </button>
                <button type="button" class="btn btn-muted btn-lg gap-2">
                  <a class="button-link button-link-linkedin" href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/" target="_blank" style="color: #000;"> <!-- Set link color to black -->
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
  background-size: cover;
  background-repeat: no-repeat;
}

.text-black {
  color: #000; /* Add class to set text color to black */
}
</style>