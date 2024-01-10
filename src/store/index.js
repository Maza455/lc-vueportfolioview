import { createStore } from 'vuex'

const dataUrl = 'https://maza455.github.io/LC_portfolioData/data/index.json/'

export default createStore({
  state: {
    homeView: null,
    aboutMe: null,
    testimonials: [],
    projects: [],
    contact: null,
    resume: null
  },
  mutations: {
    fetchHomeView(state, value) {
      state.homeView = value
    },
    fetchAboutMe(state, value) {
      state.aboutMe = value
    },
    fetchTestimonials(state, value) {
      state.testimonials = value
    },
    fetchProjects(state, value) {
      state.projects = value
    },
    fetchContact(state, value) {
      state.contact = value
    },
    fetchResume(state, value) {
      state.resume = value
    }
  },
  actions: {
    async fetchData(context) {
      let res = await fetch(dataUrl)
      let data = await res.json()
      context.commit('setHomeView', data.homeView)
      context.commit('setAboutMe', data.aboutMe)
      context.commit('setTestimonials', data.testimonials)
      context.commit('setProjects', data.projects)
      context.commit('setContact', data.reachMe)
      context.commit('setResume', data.resume)
    }
  }
})
