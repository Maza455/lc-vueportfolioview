<template>
  <main id="home">
    <section id="landing-page" class="landing-animation bgimage">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img id="landing-photo" class="img-responsive img-fluid" src="../assets/imgs/1661850299234.jpg"
              alt="" />
          </div>
          <div class="col-lg-6">
            <div class="px-4 py-5 text-center">
              <h1 id="purple-myname" class="display-5 fw-bold">
                <b>Zukisa Eric Maza</b>
              </h1>
              <div class="hero-text text-dark text-size-50px lead mb-4">
                <p>I am an Aspiring <b>Fullstack Developer</b>.</p>
                <p>I offer <b>Website's, Data fixing and Application's</b> services.</p>
                <p>To know more about MeSelf, <a href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/">Let's
                    connect</a>!</p>
              </div>
              <div class="d-grid gap-2 d-flex justify-content-center">
                <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                  <a class="button-link button-link-github" href="https://github.com/Maza455" target="_blank">
                    Click Me!<i class="bi bi-github" style="font-size: 2em;"></i>
                  </a>
                </button>
                <button type="button" class="btn btn-muted btn-lg gap-2">
                  <a class="button-link button-link-linkedin"
                    href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/" target="_blank">
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

<style>
body {
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
}

#landing-page {
  padding: 50px 0;
  text-align: center;
}

#landing-photo {
  border-radius: 50%;
  border: 16px solid #e4d7d7;
  height: 300px;
  width: 300px;
  animation: pulse 5s infinite;
}

#purple-myname {
  color: purple;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
}

.button-link {
  color: #4c5658;
  text-decoration: none;
}

.button-link:hover {
  text-decoration: underline;
}

.button-link-github {
  color: #6a5575;
}

.button-link-linkedin {
  color: #3142d4;
}

.btn {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #e9ecef;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
