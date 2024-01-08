<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Resume</h2>
      </div>
      <div class="row">
        <h4>Experience</h4>
        <ul>
          <li>
            <h5>Life Choices Academy</h5>
            <p>Computer Programming, Personal & Profesional Development</p>
            <ul>
              <li>Learning modern web languages</li>
              <li>Gain Confidence</li>
              <li>Team Work</li>
              <li>Marketable Skills</li>
              <li>Problem Solving</li>
              <li>Social Awareness</li>
            </ul>
          </li>
          <li>
            <h5>High Style</h5>
            <p>Customer Service</p>
            <p>Shop Assistant</p>
          </li>
          <li>
            <h5>The Courier Guy</h5>
            <p>Warehouse/Driver Assistant</p>
          </li>
          <li>
            <h5>The South African Education Project (SAEP)</h5>
            <p>Bridging Year Programme</p>
          </li>
          <li>
            <h5>Picker</h5>
            <p>Warehouse Assistance</p>
          </li>
          <li>
            <h5>Westridge Senior Secondary School</h5>
            <p>National Senior Certificate</p>
            <ul>
              <li>Maths</li>
              <li>English</li>
              <li>IsiXhosa (Home Language)</li>
              <li>Physics</li>
              <li>Life Sciences</li>
              <li>Geography</li>
              <li>Life Orientation</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResumeComp',
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  
  .display-2 {
    font-size: 2.5rem;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  </style>
  