const { defineConfig } = require("cypress");



module.exports = defineConfig({
  "chromeWebSecurity": false,
  env: {
    baseURL: "https://juniper-stage-learn.alw.sa"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     url: "https://lms-juniper-stage-learn.alw.sa"
     //baseURL: "https://juniper-stage-learn.alw.sa"
     experimentalSourceRewriting: false;
     failOnStatusCode: false
    },
  },
});
