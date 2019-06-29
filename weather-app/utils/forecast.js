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

const forecast = (long, lat, callback) => {
    url.lat = lat;
    url.long = long;

    request({url: url.out(), json: true}, (error, response, {currently:{apparentTemperature,precipProbability},errorB,daily:{data:[item1]}}) => {
        // const {summary} = item1;
        if (error) {
            callback('Error connection',undefined);
        } else if (errorB) {
            callback('Error: Not enough information',undefined);
        } else {
            const temperature = apparentTemperature;
            const rainChance = precipProbability;
            const summary = item1.summary;

            callback(undefined,`${summary} It is currently ${temperature} degrees out. There is a ${rainChance}% chance of rain.`);

        }
    });
};


module.exports = forecast;