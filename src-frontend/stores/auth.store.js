// SAU
import { defineStore } from "pinia";
import { saveToken, removeToken, getToken } from "../utils/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: getToken() || "",
    isLoggedIn: !!getToken(),
  }),

  actions: {
    // SAU
login(token) {
  this.token = token;
  this.isLoggedIn = true;

  saveToken(token);
},
    // SAU
logout() {
  this.token = "";
  this.isLoggedIn = false;

  removeToken();
},
  },
});