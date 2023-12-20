<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Welcome Ekhaya</h2>
    </div>
    <div class="row" v-if="jobTitle"></div>
    <p class="lead" v-for="title of jobTitle" :key="title.id">
    {{ title.title }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    jobTitle() {
      return this.$store.state.jobTitle
    }
  },
  mounted() {
    this.$store.dispatch('fetchJobTitle')
  }
}
</script>
