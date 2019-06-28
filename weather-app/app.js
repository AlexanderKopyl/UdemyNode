const request = require('request');
const geocode = require('./utils/geocode');
const url = {
    urls: 'https://api.darksky.net/forecast/',
    apiKey: 'f7e71606d23737657a8bf5d2b7937428',
    lang: 'ru',
    units: 'auto',

    out() {
        return this.urls + this.apiKey + '/' + this.long + "," + this.lat+"?lang=" + this.lang + "&units=" + this.units
    }
};

// request({url:url.out(), json: true},(error, response, body)=>{
//     if(error){
//         console.log('Error connection');
//     }else if( body.error){
//         console.log('Error: Not enough information');
//     }else{
//         const temperature = body.currently.apparentTemperature;
//         const rainChance = body.currently.precipProbability;
//         const summary = body.daily.data[0].summary;
//         console.log(`${summary} It is currently ${temperature} degrees out. There is a ${rainChance}% chance of rain.`);
//
//     }
// });


geocode('Dnepr Ukrain', (error,data)=>{
    if(error){
        console.log(error)
    }else {
        url.lat = data.latitude;
        url.long = data.longtitude;
        request({url: url.out(), json: true}, (error, response, body) => {
            if (error) {
                console.log('Error connection');
            } else if (body.error) {
                console.log('Error: Not enough information');
            } else {
                const temperature = body.currently.apparentTemperature;
                const rainChance = body.currently.precipProbability;
                const summary = body.daily.data[0].summary;
                console.log(data.place_name,`${summary} It is currently ${temperature} degrees out. There is a ${rainChance}% chance of rain.`);

            }
        });
    }
});

