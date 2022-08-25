
// Select button
const btn = document.querySelector('button');

// Add event listener to button
btn.addEventListener('click', (e) => {

    // Create new li element
    const li = document.createElement('li');

    // select input element
    const input = document.querySelector('input');

    // Add input value to li element
    li.textContent = input.value;

    // Add li element to ul element
    document.querySelector('ul').appendChild(li);

    // Clear input value when button is clicked
    input.value = '';
});


// Delegation
const ul = document.querySelector("ul").addEventListener("click", (e) => {
    e.target.style.color = "red";

    // ***************** OR ****************
    // const ul = document.querySelector("ul");
	// 	ul.addEventListener("click", handleClick);
	// 	function handleClick(e) {
	// 		if (e.target.tagName === "LI") {
	// 			e.target.style.color = "red";
	// 		}
	// 	}

});


