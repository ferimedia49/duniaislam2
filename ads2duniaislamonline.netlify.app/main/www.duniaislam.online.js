const configAds = [{
	"src": "https://pl16909825.safestgatetocontent.com/43/26/01/43260101bb3c284b3bbe8d9635f7d25e.js",
	"name-element": "script",
	"target-selector": "body"
}, {
	"src": "https://pl16909825.safestgatetocontent.com/43/26/01/43260101bb3c284b3bbe8d9635f7d25e.js",
	"name-element": "script",
	"target-selector": "body"
}];
const initAds = async (config) => {
	for (let data of config) {
		const elInject = document.createElement(data["name-element"]);
		elInject.setAttribute("src", data.src);
		document.querySelector(data["target-selector"]).append(elInject);
	};
};
initAds(configAds);