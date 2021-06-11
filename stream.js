require('dotenv').config();

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// You can also get the stream in a callback if you prefer.
client.stream('statuses/filter', { track: 'valorant' }, function (stream) {
    stream.on('data', function (event) {
        console.log(event && event.text);
    });

    stream.on('error', function (error) {
        throw error;
    });
});