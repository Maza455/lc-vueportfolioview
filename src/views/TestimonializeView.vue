<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Testimonials</h2>
        <div v-for="(testimonial, index) in testimonials" :key="index" class="col-lg-6 col-md-6 col-sm-12">
          <div class="testimonial-card">
            <img :src="testimonial.image" :alt="testimonial.name" class="rounded-circle">
            <h5>{{ testimonial.name }} <a :href="testimonial.linkedin" target="_blank"><i class="bi bi-linkedin"></i></a></h5>
            <h6>{{ testimonial.role }}</h6>
            <p><em>"{{ testimonial.message }}"</em></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            name: "Thembela Selani",
            image: "https://i.postimg.cc/gJcYSB4c/1602231622738.jpg",
            linkedin: "https://www.linkedin.com/in/thembela-selani-8635791b2/",
            role: "Data Scientist",
            message: "Zukisa is a smart student with a bright future. He always has a smile on his face and is a pleasure to work with. I look forward to seeing what he will achieve in the future and highly recommend him."
          },
          {
            name: "Vuyile Magwaza",
            image: "https://i.postimg.cc/nhmX8gxn/1642894920120.jpg",
            linkedin: "https://www.linkedin.com/in/vuyile-magwaza-bb6315164/",
            role: "Web Developer",
            message: "Zukisa Maza is a hardworking person with perseverance, always eager to learn or work, and he is quite friendly."
          },
          {
            name: "Asanda Radebe",
            image: "https://i.postimg.cc/rmNyy2ZL/1591703723605.jpg",
            linkedin: "https://www.linkedin.com/in/asandaradebe/",
            role: "Computer Programming Student",
            message: "As a fellow student, I think Zukisa has a friendly and caring personality. He loves participating when he knows the answer. He is a hardworking individual who always shows determination to learn and to help others."
          },
          {
            name: "Joel Mukanya",
            image: "https://i.postimg.cc/SRXQ8YRq/1690465956035.jpg",
            linkedin: "https://www.linkedin.com/in/joel-tshimanga-mukanya-b4b27834/",
            role: "FullStack Student",
            message: "As a fellow lecturer, I think Zukisa has a friendly and caring personality. He loves participating when he knows the answer. He is a hardworking individual who always shows determination to learn and to help others."
          },
          {
            name: "Candice Amon",
            image: "https://i.postimg.cc/LsXsRWSn/1517847608156.jpg",
            linkedin: "https://www.linkedin.com/in/candice-amon-5b567414a/",
            role: "Software Developer Student",
            message: "As a fellow Manager, I think Zukisa has a friendly and caring personality. He loves participating when he knows the answer. He is a hardworking individual who always shows determination to learn and to help others."
          },
          {
            name: "Nkosinathi Siyeni",
            image: "https://i.postimg.cc/1XFgrjJC/1687250502989.jpg",
            linkedin: "https://www.linkedin.com/in/nkosinathi-siyeni-782b471b1/",
            role: "Coding Student",
            message: "Zukisa is a hard worker and a determined person in general. Additionally, he is a person who loves a challenge."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @media (max-width: 576px) {
    .col-lg-6,
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  </style>