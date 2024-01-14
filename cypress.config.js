// If running from a standalone setup un-comment 'STANDALONE SET UP' portion and comment 'NODE JS SETUP'.

/*
// ###### STANDALONE SET UP START #######
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/IconicWebAppTest/*.js',
    testIsolation: false
  },
};
// ###### STANDALONE SET UP END #######
*/


// ############ NODEJS SETUP START #########
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/IconicWebAppTest/*.js',
    testIsolation: false
  },
});

// ############ NODEJS SETUP START END #########


