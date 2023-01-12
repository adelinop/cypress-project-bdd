import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class CommonSteps {}

Given('I access the system', () => {
	cy.accessUrl()
})
When('I access option {string}', option => {
	applications.homePage.accessMenuOption(option)
})
When('I validate the page {string} opened correctly', option => {
	applications.abPage.validaTitlePageLoad(option)
})
