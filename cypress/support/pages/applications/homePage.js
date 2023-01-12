import BasePage from '../basePage'

const selectors = {
	menuLinks: 'div [id="content"]  a '
}

class HomePage extends BasePage {
	accessMenuOption(option) {
		this.accessMenuByText(selectors.menuLinks, option)
	}
	accessRemoveElementsPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.RemoveElement)
		})
	}
	accessBrokenImagesPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.BrokenImages)
		})
	}
	accessContextMenuPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.ContextMenu)
		})
	}
	accessDragAndDropPage() {
		cy.fixture('env').then(dataEnv => {
			this.accessMenuByText(selectors.menuLinks, dataEnv.menus.DragAndDrop)
		})
	}
}
export default HomePage
