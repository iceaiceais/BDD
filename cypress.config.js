const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
	video: false,
	defaultCommandTimeout: 5000,
	pageLoadTimeout: 10000,

	e2e: {
		specPattern: 'cypress/e2e/1-getting-started',
		chromeWebSecurity: false,

		setupNodeEvents(on, config) {
			// implement node event listeners here
			on('file:preprocessor', cucumber())
		},
	},
})