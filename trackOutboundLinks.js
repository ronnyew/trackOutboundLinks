/**
* https://support.google.com/analytics/answer/1136920?hl=en
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*
* usage: 
* trackOutboundLink('https://www.example.com', 'outbound', 'click', 'https://www.example.com'); 
* trackOutboundLink('https://www.example.com', 'outbound', 'click', 'Name of thing you clicked'); 
* or
* <a href="http://www.example.com" onclick="trackOutboundLink('https://www.example.com', 'outbound', 'click', 'https://www.example.com'); return false;">Check out example.com</a>
*/
var trackOutboundLink = function(url, category, action, label) {
	try {
		ga('send', 'event', category, action, label, {
		 'transport': 'beacon',
		 'hitCallback': function(){ document.location = url; }
		});	}
	catch(err) {
		document.location = url;
	}
}

var trackOutboundLinkInNewWindow = function(url, category, action, label) {
	try {
		ga('send', 'event', category, action, label, {
		 'transport': 'beacon',
		 'hitCallback': function(){ window.open(url,'_blank'); }
		});	}
	catch(err) {
		window.open(url,'_blank');
	}
}
