<template>
    <footer class="color-changing-footer py-3">
      <div class="container">
        <div class="row">
          <p class="lead">Zukisa's Portfolio &copy; <span>{{ currYear }}</span></p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style scoped>
  .color-changing-footer {
    /* Your custom color-changing animation CSS */
    animation: colorChange 5s infinite;
  }
  
  @keyframes colorChange {
    0% { background-color: red; }
    50% { background-color: blue; }
    100% { background-color: green; }
  }
  </style>