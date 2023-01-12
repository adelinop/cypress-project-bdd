import BasePage from '../basePage'

const selectors = {
	menuLinks: 'div [id="content"]  a '
}

class HomePage extends BasePage {
	accessMenuOption(option) {
		this.accessMenuByText(selectors.menuLinks, option)
	}
}
export default HomePage
