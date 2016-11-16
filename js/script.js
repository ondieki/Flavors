/* Sets a random integer quantity in range [1, 20] for each flavor. */
function setQuantities() {
 	 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
	var getMeta = document.getElementsByClassName("meta");
	for(i=0; i<getMeta.length; i++){
		var randomInt = getRandomInt(1,21); 
		var element1 = document.createElement("span");
		var theFirstChild = getMeta[i].firstChild;
		var insertedNode = getMeta[i].insertBefore(element1, theFirstChild);
		var quantity = document.createTextNode(randomInt);
		element1.appendChild(quantity);
		element1.className = "quantity";
	}
}

/* Extracts and returns an array of flavor objects based on data in the DOM. Each
 * flavor object should contain five properties:
 *
 * element: the HTMLElement that corresponds to the .flavor div in the DOM
 * name: the name of the flavor
 * description: the description of the flavor
 * price: how much the flavor costs
 * quantity: how many cups of the flavor are available
 */
function extractFlavors() {
  var getFlavor = document.getElementsByClassName("flavor");
  var flavorArray = [];

  for(i=0; i<getFlavor.length; i++){

  	var elementFlavor= getFlavor[i];
  	var h2 = elementFlavor.querySelector(".description h2");
  	var elementName = h2.innerHTML;

  	var p = elementFlavor.querySelector(".description p");
  	var elementDescription = p.innerHTML;

	var spanPriceArray = elementFlavor.getElementsByClassName('price');
  	var elementPrice = spanPriceArray[0].innerHTML;
  	var numberPriceFloat = Number(elementPrice.replace(/[^0-9\.]+/g,""));

  	var spanQuantityArray = elementFlavor.getElementsByClassName('quantity')
  	var elementQuantity = spanQuantityArray[0].innerHTML;
  	var numberQuantity = Number(elementQuantity.replace(/[^0-9\.]+/g,""));

	var elementFlavorObject = {};
   	elementFlavorObject.element = elementFlavor;
  	elementFlavorObject.name = elementName;
  	elementFlavorObject.description = elementDescription;
  	elementFlavorObject.price = elementPrice;
  	elementFlavorObject.quantity = elementQuantity;
  	flavorArray.push(elementFlavorObject);
  	
  }

  return flavorArray;
}

/* Calculates and returns the average price of the given set of flavors. The
 * average should be rounded to two decimal places. */
function calculateAveragePrice(flavors) {
  // TODO
}

/* Finds flavors that have prices below the given threshold. Returns an array
 * of strings, each of the form "[flavor] costs $[price]". There should be
 * one string for each cheap flavor. */
function findCheapFlavors(flavors, threshold) {
  // TODO
}

/* Populates the select dropdown with options. There should be one option tag
 * for each of the given flavors. */
function populateOptions(flavors) {
  // TODO
}

/* Processes orders for the given set of flavors. When a valid order is made,
 * decrements the quantity of the associated flavor. */
function processOrders(flavors) {
  // TODO
}

/* Highlights flavors when clicked to make a simple favoriting system. */
function highlightFlavors(flavors) {
  // TODO
}


/***************************************************************************/
/*                                                                         */
/* Please do not modify code below this line, but feel free to examine it. */
/*                                                                         */
/***************************************************************************/


const CHEAP_PRICE_THRESHOLD = 1.50

// setting quantities can modify the size of flavor divs, so apply the grid
// layout *after* quantities have been set.
setQuantities()
const container = document.getElementById('container')
new Masonry(container, { itemSelector: '.flavor' })

// calculate statistics about flavors
const flavors = extractFlavors()
const averagePrice = calculateAveragePrice(flavors)
console.log('Average price:', averagePrice)

const cheapFlavors = findCheapFlavors(flavors, CHEAP_PRICE_THRESHOLD)
console.log('Cheap flavors:', cheapFlavors)

// handle flavor orders and highlighting
populateOptions(flavors)
processOrders(flavors)
highlightFlavors(flavors)
