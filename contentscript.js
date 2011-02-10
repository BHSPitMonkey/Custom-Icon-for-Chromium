// Get custom icon list from localstorage
chrome.extension.sendRequest({method: "getStatus"}, function(response) {
	var customIconStr = response;
	if (customIconStr != null)
	{
		customIcons = eval('(' + customIconStr + ')');
		if (customIcons != null)
		{
			// Iterate over list, checking for matches
			for (index in customIcons)
			{
				// If the current page URL matches this pair, we'll use this icon
				if (customIcons[index][0] && document.location.href.match(customIcons[index][0]))
				{
					// Set custom icon
					var link = document.createElement('link');
					link.type = 'image/x-icon';
					link.rel = 'shortcut icon';
					link.href = customIcons[index][1];
					document.getElementsByTagName('head')[0].appendChild(link);
					break;
				}
			}
		}
	} 
});
