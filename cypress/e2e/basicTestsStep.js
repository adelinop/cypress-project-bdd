import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class BasicTests {}

Then('I validate if Paragraph is showing', () => {
	applications.abPage.validateTextParagraph()
})

Given('I add an Element', () => {
	applications.addRemoveElementsPage.clickOnAddElement()
})

Given('I validate if the element is showing', () => {
	applications.addRemoveElementsPage.validateButtonIsVisible()
})

When('I delete the element', () => {
	applications.addRemoveElementsPage.deleteElement()
})

Then('I can validate if the element was deleted', () => {
	applications.addRemoveElementsPage.validateButtonIsNotVisible()
})
