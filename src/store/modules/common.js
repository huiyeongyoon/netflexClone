<<<<<<< HEAD
const state = {}

const mutations = {}

const actions = {}
=======
const state = {
  code: {
    YNTPCD: ["Y", "N"],
    USERSTATETPCD: [
      { cmmnCode: "00", cmmnCodeName: "정상" },
      { cmmnCode: "01", cmmnCodeName: "일시정지" },
      { cmmnCode: "02", cmmnCodeName: "휴면" },
      { cmmnCode: "03", cmmnCodeName: "Lock" },
    ],
    USERSTATETPCD2: [
      { cmmnCode: "05", cmmnCodeName: "정상2" },
      { cmmnCode: "06", cmmnCodeName: "일시정지2" },
      { cmmnCode: "07", cmmnCodeName: "휴면2" },
      { cmmnCode: "08", cmmnCodeName: "Lock2" },
    ],
  },
}

const mutations = {
  SET_CODE: (state, code) => {
    state.code = code
  },
}

const actions = {
  setCode({ commit }) {
    commit("SET_CODE", null)
  },
}
>>>>>>> fa0b73bc7be1d990081570065eef96f8eadbd8d5

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
