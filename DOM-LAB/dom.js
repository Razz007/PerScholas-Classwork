

var menuLinks = [
	{ text: "about", href: "/about" },
	{ text: "catalog", href: "/catalog" },
	{ text: "orders", href: "/orders" },
	{ text: "account", href: "/account" },
];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";


// Create h1 tag assign "SEI Rocks!" to its content
let h1 = document.createElement("h1");
h1.textContent = "SEI Rocks!";
mainEl.appendChild(h1);

// Add flex-ctr class to mainEl
mainEl.classList.add("flex-ctr");

// select the nav element and assign it to topMenuEl
let topMenuEl = document.getElementById("top-menu");

// set height of nav element to 100%
topMenuEl.style.height = "100%";

// set background color of nave to --top-menu-bg
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add flex-around class to topMenuEL
topMenuEl.classList.add("flex-around");

// Create anchor elements and assign content
for (const links of menuLinks) {
	const a = document.createElement("a");
	a.setAttribute("href", links.href);
	a.textContent = links.text;
	topMenuEl.appendChild(a);
	
}