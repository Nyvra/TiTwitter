var Twitter = require('ti.twitter');
Ti.API.info("module is => " + Twitter);

Ti.API.info(Twitter.canSendTweet);

if (Twitter.canSendTweet) {
	Twitter.tweet({
		message: "Fuubar",
		url: "http://www.rafaelks.com"
	});
}