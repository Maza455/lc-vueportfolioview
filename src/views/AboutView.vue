<template>
  <section id="about-page" style="padding-top: 100px; padding-bottom: 130px;">
    <div class="container">
      <h1 class="text-center" id="about-heading"
        style="padding-top: 20px; padding-bottom: 20px; border-bottom: 2px solid; font-family: sans-serif; color: purple;">
        About Me</h1>
      <div class="row">
        <div class="col-md-4 order-md-2">
          <div class="card border-radius-10px">
            <a href="https://ibb.co/3h5g031"><img src="https://i.ibb.co/3h5g031/Proctor.jpg" alt="Proctor" border="0"
                height="30%"></a>
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
                  <small id="purple-myname"><a href="../assets/imgs/MazaCV (2023)..K (1) (2).pdf"
                      download="Zukisa_Eric_Maza_CV.pdf" target="_blank" class="btn btn-outline-success">
                      <i class="fa fa-download"></i> Download CV</a></small>
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
                I'm a Xhosa guy who once studied Computer Science at the University of Western Cape, but not for long
                due to finances. Now I'm a good FullStack DEV at Life_Choices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img class="d-block w-100 h-100vh" src="https://i.postimg.cc/HL8pmNvw/dreamstime-m-123641233-1.jpg"
        alt="Third slide">

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
.card {
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px;
  height: 100%;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.social-links a {
  margin: 0 5px;
  color: #000;
  transition: 0.3s;
}

.social-links a:hover {
  color: #6c63ff;
}

.card-title {
  font-weight: bold;
  font-size: 24px;
  color: #777;
  margin-bottom: 10px;
}

.card-text {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

.card-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.card-buttons a {
  text-decoration: none;
  color: #6c63ff;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid #6c63ff;
  border-radius: 5px;
  transition: 0.3s;
}

.card-buttons a:hover {
  background-color: #6c63ff;
  color: #fff;
}

@media (max-width: 767px) {
  .card {
    margin: 10px;
    width: calc(100% - 20px);
  }

  .card img {
    max-height: 100px;
  }
}

@media (max-width: 575px) {
  .card-body {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-title {
    margin-bottom: 0;
  }

  .card-text {
    font-size: 16px;
    line-height: 1.4;
  }

  .card-buttons {
    margin-top: 10px;
  }
}

@media (max-width: 375px) {
  .card-title {
    font-size: 20px;
  }

  .card-text {
    font-size: 14px;
    line-height: 1.3;
  }

  .card-buttons {
    margin-top: 5px;
  }
}
</style>
