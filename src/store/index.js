import { createStore } from 'vuex'

const dataUrl = 'https://maza455.github.io/LC_portfolioData/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    eduction: null,
    skills: null,
    testimonials: null,
    projects: null,
    contact: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.eduction = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setContact(state, value) {
      state.contact = value
    }
  },
  actions: {
    async fetchJobTitle(context) {
      let res = await fetch(dataUrl)
      let {jobTitle} = await res.json()
      context.commit('setJobTitle', jobTitle)
    }
  },
  modules: {
  }
})
