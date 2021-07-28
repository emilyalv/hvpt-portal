import axios from "axios";

export default {
  // Gets all modules
  getModules: function () {
    return axios.get("api/modules");
  },

  getQuestions: function (id) {
    return axios.get("api/activities/" + id);
  },

  getChoices: function (id) {
    return axios.get("api/questions/" + id);
  },

  getActivities: function (id) {
    return axios.get("/api/activities/" + id);
  },

  login: function (username, password) {
    return axios.post("api/users/login", { data: { username, password } });
  },
};
