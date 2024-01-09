// import { createStore } from 'vuex'

// const dataUrl = 'https://maza455.github.io/LC_portfolioData/data/'

// export default createStore({
//   state: {
//     jobTitle: null,
//     about: null,
//     eduction: null,
//     skills: null,
//     testimonials: null,
//     projects: null,
//     contact: null
//   },
//   getters: {
//   },
//   mutations: {
//     setJobTitle(state, value) {
//       state.jobTitle = value
//     },
//     setAbout(state, value) {
//       state.about = value
//     },
//     setEducation(state, value) {
//       state.eduction = value
//     },
//     setSkills(state, value) {
//       state.skills = value
//     },
//     setTestimonials(state, value) {
//       state.testimonials = value
//     },
//     setProjects(state, value) {
//       state.projects = value
//     },
//     setContact(state, value) {
//       state.contact = value
//     }
//   },
//   actions: {
//     async fetchJobTitle(context) {
//       let res = await fetch(dataUrl)
//       let {jobTitle} = await res.json()
//       context.commit('setJobTitle', jobTitle)
//     },
//     async fetchAbout(context) {
//       // let res = await fetch(dataUrl)
//       let {about} = await (await fetch(dataUrl)).json()
//       context.commit('setAbout', about)
//     }
//   },
//   modules: {
//   }
// })

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
      state.education = value
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
    async fetchData({ commit }) {
      try {
        const response = await fetch(dataUrl)
        const data = await response.json()

        // Commit the data to the store
        commit('setJobTitle', data.jobTitle)
        commit('setAbout', data.about)
        commit('setEducation', data.education)
        commit('setSkills', data.skills)
        commit('setTestimonials', data.testimonials)
        commit('setProjects', data.projects)
        commit('setContact', data.contact)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  modules: {
  }
})

