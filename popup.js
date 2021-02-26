/*
 * popup.js
 * Copyright (C) 2021 edolphin <dngfngyang@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
// Initialize button with user's preferred color
let addToPac = document.getElementById("addToPac");

addToPac.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	var activeTab = tab;
	var tabUrl = activeTab.url;
	var matches = tabUrl.match(/^http[s]*:\/\/(.*?)\/.*/);
	if (!matches || matches.length < 1) {
		return
	}
	var host = matches[1];
	chrome.runtime.sendMessage(
		{url: host},
		response => console.log(response)
	);
});

