const request = require('request');

const url = {
    urls: 'https://api.darksky.net/forecast/',
    apiKey: 'f7e71606d23737657a8bf5d2b7937428',
    lang: 'ru',
    units: 'auto',

    out() {
        return this.urls + this.apiKey + '/' + this.lat + "," + this.long+"?lang=" + this.lang + "&units=" + this.units
    }
};

const forrecast = (long, lat, callback) => {
    url.lat = lat;
    url.long = long;

    request({url: url.out(), json: true}, (error, response, body) => {
        if (error) {
            callback('Error connection',undefined);
        } else if (body.error) {
            callback('Error: Not enough information',undefined);
        } else {
            const temperature = body.currently.apparentTemperature;
            const rainChance = body.currently.precipProbability;
            const summary = body.daily.data[0].summary;
            callback(undefined,`${summary} It is currently ${temperature} degrees out. There is a ${rainChance}% chance of rain.`);

        }
    });
};


module.exports = forrecast;