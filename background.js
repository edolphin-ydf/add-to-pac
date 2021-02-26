/*
 * background.js
 * Copyright (C) 2021 edolphin <dngfngyang@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		fetch("http://127.0.0.1:1089/addPac?url=" + request.url)
			.then(response => response.text())
			.then(text => sendResponse(text))
			.catch(error => sendResponse(error.err))
		return true;  // Will respond asynchronously.
	}
);

