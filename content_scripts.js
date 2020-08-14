// Search through all header elements on the page. if one is found containing the word "Ingredients", do something.
const searchAllHeadings = () => {
	const foundHeadings = document.querySelectorAll("h1, h2, h3, h4");
	let ingredientsHeading = null;

	for (let i = 0; i < foundHeadings.length; ++i) {
		const headingText = foundHeadings[i].textContent;

		if (headingText.toLowerCase() === 'ingredients') {
			foundHeadings[i].style.color = '#ff0040';

			ingredientsHeading = foundHeadings[i];


			// create a span inside of the heading with a unique id so that we can scroll to it/add it to the url...
			// but that edits the url so maybe scroll to its posiiton instead 
			// const node = document.createElement('span');
			// node.id = '_just-give-me-the-recipe-ingredients';
  			// 		foundHeadings[i].appendChild(node);
  			// TODO try adding this right above the ingredients list

			break;
		}
	}

	if (ingredientsHeading) {
		ingredientsHeading.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
}

setTimeout(function(){ 
	searchAllHeadings(); 
}, 3000);

