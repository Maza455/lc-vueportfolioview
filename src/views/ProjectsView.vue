<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div v-for="project in projects" :key="project.id" class="col col-md-12 col-md-4 col-lg-4">
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a :href="project.githubLink" target="_blank"><button>Github</button></a>
                <a :href="project.liveDemoLink" target="_blank"><button>{{ project.liveDemoText }}</button></a>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-muted btn-lg px-4 gap-3">
                  <a :href="project.authorGithub" target="_blank"><i class="bi bi-github" style="font-size: 2em;"></i></a>
                </button>
                <small class="text-muted">Last updated {{ project.lastUpdated }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Netflix",
            description: "First ever Netflix created with Html and Css",
            image: "https://i.postimg.cc/RhkL9YPK/download-2.png",
            githubLink: "https://maza455.github.io/LC_Project_Netflix/",
            liveDemoLink: "https://teal-khapse-e2f9ee.netlify.app",
            liveDemoText: "Netflix",
            authorGithub: "https://github.com/Maza455",
            lastUpdated: "4 days ago"
          },
          {
            id: 2,
            title: "Keyboard",
            description: "This is a task where we practiced how to design and develop a Virtual Keyboard.",
            image: "https://i.postimg.cc/1Xh8zZQm/catalogfeed-9171c225-3002-4fc7-be04-1313a27ba376.webp",
            githubLink: "https://maza455.github.io/KeyBoard/",
            liveDemoLink: "https://admirable-bienenstitch-c23f15.netlify.app/",
            liveDemoText: "Keyboard",
            authorGithub: "Maza455",
            lastUpdated: "a week ago"
          },
          {
            id: 3,
            title: "Calculator",
            description: "This is a calculator working on.",
            image: "https://i.postimg.cc/k4hBxm9P/e726abd62a7d08749d3a88289cdc78d.png",
            githubLink: "https://maza455.github.io/LC_Calculator/",
            liveDemoLink: "https://roaring-griffin-921b90.netlify.app",
            liveDemoText: "Calculator",
            authorGithub: "Maza455",
            lastUpdated: "a week ago"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  
  </style>