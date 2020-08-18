// If a heading has been found with the right text content, scroll to it.
const scrollToRecipe = (heading) => {
	if (heading !== null && heading !== undefined) {
		heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}

// give the heading a cutsom style just for fun and ease of finding it later.
const styleHeading = (heading) => {
	heading.style.color = '#ff0040';
	heading.style.backgroundColor = '#fff1f5';
	heading.style.scrollMargin = '75px';
};

// Search through all header elements on the page. if one is found equaling the word "Ingredients", return it.
// TODO add regex around 'ingredients' too allow for one character before or after hte word instead of having special cases.
const findRecipeHeadings = (options) => {
	const headingsOnPage = document.querySelectorAll("h1, h2, h3, h4, h5");

	for (let i = 0; i < headingsOnPage.length; ++i) {
		const headingText = headingsOnPage[i].textContent.toLowerCase();

		// if 'ingredients' heading is found, break from the loop and return the element.
		if (headingText === 'ingredients' || headingText === 'ingredients:') {
			return headingsOnPage[i];
		}
	}

	return null;
};

const findRecipeAndScroll = () => {
	const recipeHeading = findRecipeHeadings();
	scrollToRecipe(recipeHeading);
}

// populate the page with a button that onclick scrolls user to recipe
const renderScrollButton = (buttonClick) => {
	const btn = document.createElement('button');
	btn.id = 'yoyoyo';
	Object.assign(btn.style, {
		position: 'fixed',
		top: 0,
		right: 0,
		backgroundColor: '#ff0040',
		width: 'unset',
		height: 'unset',
		zIndex: 2147483647,
		border: 0,
		margin: '1rem 1rem 0 0',
		padding: '5px 10px',
		color: 'white',
		fontFamily: 'Consolas, Arial',
		fontSize: '12px',
		boxShadow: '3px 3px 5px black',
		border: 'none',
		borderRadius: 0,
		lineHeight: 'normal'
	});
	btn.innerHTML = '<img src="images/favicon.png" /> Scroll to recipe' ;
	btn.onclick = buttonClick;
	document.body.appendChild(btn);
};

// TODO make this find and save headings data so we can scroll to them later
setTimeout(() => {
	const heading = findRecipeHeadings(); 
    // if heading exists, render a button in the DOM with the option to scroll to that heading.
	if (heading !== null && heading !== undefined) {
		const buttonClick = () => scrollToRecipe(heading);
		renderScrollButton(buttonClick);
	}
}, 500);