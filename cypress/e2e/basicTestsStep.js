import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import Applications from '../support/pages/application'
const applications = new Applications()
export default class BasicTests {}

Then('I validate if paragraph is showing', () => {
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
Given('I access basic auth', () => {
	applications.homePage.authenticateAccess()
})
When('I validate broken images', () => {
	applications.brokenImagesPage.validateBrokenImage()
})
Then('I validate if image is loading', () => {
	applications.brokenImagesPage.validateImage()
})
When('I change the square position', () => {
	applications.dragAndDropPage.changeSquarePositions()
	applications.dragAndDropPage.validateChangedB()
})
Then('I validate if the positions was changed', () => {
	applications.dragAndDropPage.changeSquarePositions()
	applications.dragAndDropPage.validateChangedA()
})
Then('I click on context box validating the alert', () => {
	applications.contextMenuPage.clickBox()
})
