// on page load, make chrome extension popup button
window.onload = function(){
	let scrollToRecipePopup = document.getElementById('scrollToRecipePopup');

	if (scrollToRecipePopup) {
		scrollToRecipePopup.onclick = function(element) {
			let color = element.target.value;
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  		chrome.tabs.executeScript(
		      		tabs[0].id,
		      		{ code: 'findRecipeAndScroll()' });
				});
		};
	}
}