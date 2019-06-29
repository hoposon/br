export const actions = {
	animateCSS (state, {element, animationName, addClass, type}) {
		const node = document.querySelector(element)
		if (type && type[0] === 'nav-bar-items' && type[1] === 'show') {
			node.classList.remove('hide')
			// node.classList.add('show')
		}
		node.classList.add('animated', animationName)

		function handleAnimationEnd() {
			node.classList.remove('animated', animationName)
			if (type && type[0] === 'nav-bar-items' && type[1] === 'hide') {
				node.classList.add('hide')
				// node.classList.add('show')
			}
			node.removeEventListener('animationend', handleAnimationEnd)
		}

		node.addEventListener('animationend', handleAnimationEnd)
	}
}