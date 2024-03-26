<template>
  <main id="home">
    <section id="landing-page" class="landing-animation bgimage" style="height: 100vh; overflow: hidden">
      <div class="welcome-text">
        <h1 :style="{ color: textColor }"><b><u><i>Welcome to... Mr Zukisa Maza's Portfolio</i></u></b></h1>
        <div class="stars-animation"></div>
      </div>
      <div class="container-fluid content-container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 order-md-2 col-12">
            <a href="https://ibb.co/QYFvsx5"><img src="https://i.ibb.co/RQpTLJ5/Maza.jpg" alt="Maza" border="0"
                style="width: 100%; height: auto;"></a>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <div class="px-4 py-5 text-center text-black">
              <h1 id="purple-myname" class="display-5 fw-bold">
                <b>Zukisa Eric Maza</b>
              </h1>
              <div class="hero-text text-dark text-size-50px lead mb-4">
                <p class="mb-3">I am an Aspiring <b>Fullstack Developer</b>.</p>
                <p class="mb-3">I offer <b>Website's, Data fixing and Application's</b> services.</p>
                <p class="mb-0">To know more about MeSelf, <a
                    href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/" style="color: #000;">Let's
                    connect</a>!</p>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-center">
                <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                  <a class="button-link button-link-github" href="https://github.com/Maza455" target="_blank"
                    style="color: #000;">
                    Click Me!<i class="bi bi-github" style="font-size: 2em;"></i>
                  </a>
                </button>
                <button type="button" class="btn btn-muted btn-lg gap-2">
                  <a class="button-link button-link-linkedin"
                    href="https://www.linkedin.com/in/eric-zukisa-maza-2376b119b/" target="_blank" style="color: #000;">
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

<script>
export default {
  data() {
    return {
      textColor: '#000',
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'],
      currentColorIndex: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.animateText();
      setTimeout(() => {
        document.querySelector('.welcome-text').classList.add('fade-out');
        document.querySelector('.content-container').classList.add('fade-in');
      }, 3000);
    }, 1000);
  },
  methods: {
    animateText() {
      setInterval(() => {
        this.textColor = this.colors[this.currentColorIndex];
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
      }, 1000); // Change text color every second
    }
  }
};
</script>

<style scoped>
.bgimage {
  background-size: cover;
  background-repeat: no-repeat;
}

.welcome-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 1s;
}

.fade-out {
  opacity: 0;
}

.content-container {
  opacity: 0;
}

.fade-in {
  opacity: 1;
  transition: opacity 1s;
}

.stars-animation {
  width: 100px;
  height: 100px;
  background-image: url('https://www.transparenttextures.com/patterns/stars.png');
  animation: stars 5s linear infinite;
}

@keyframes stars {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
}

@media (max-width: 991.98px) {
  .hero-text {
    font-size: 20px;
    padding: 10px;
  }
}
</style>