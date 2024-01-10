import { createStore } from 'vuex'

const dataUrl = 'https://maza455.github.io/LC_portfolioData/data/'

export default createStore({
  state: {
    homeView: null,
    aboutMe: null,
    testimonials: [],
    projects: [],
    contact: null,
    resume: []
  },
  mutations: {
    setHomeView(state, value) {
      state.homeView = value
    },
    setAboutMe(state, value) {
      state.aboutMe = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setContact(state, value) {
      state.contact = value
    },
    setResume(state, value) {
      state.resume = value
    }
  },

actions: {
  async fetchData(context) {
    let res = await fetch(dataUrl);
    let data = await res.json();
    console.log(data); 
    context.commit('setHomeView', data.homeView);
    context.commit('setAboutMe', data.aboutMe);
    context.commit('setTestimonials', data.testimonials);
    context.commit('setProjects', data.projects);
    context.commit('setContact', data.reachMe);
    context.commit('setResume', data.resume);
  }
}
})
