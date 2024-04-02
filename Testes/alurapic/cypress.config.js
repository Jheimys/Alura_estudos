const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Para gerar o video tenho que add esse comando
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      "reporter"; "mochawesome",
      "reporterOptions"; 
        { "reportDir"; "cypress/report/mochawesome-report",
          "overwrite"; true,
          "html"; true,
          "json"; false,
          "timestamp"; "mmddyyyy_HHMMss" 
        }
    },
  },

});



