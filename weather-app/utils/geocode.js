const request = require('request');
const geocode = (address,callback) =>{

    const mapBoxUrl = {
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
        apiKey: 'pk.eyJ1IjoiYWxleHNhbmRlcjExMTE1IiwiYSI6ImNqeGRheDU4bTBiZjMzb3M4bmJmdTZvd2YifQ.LcuiK8noc8bF1kayZJD1kw',
        sity: encodeURIComponent(address) + '.json',
        limit: 3,

        out() {
            return this.url + this.sity + "?limit=" + this.limit + "&access_token=" + this.apiKey
        }
    };

    request({url:mapBoxUrl.out(), json: true},(error, response, body)=>{
        if(error){
            callback("Error connection",undefined);
        }else if(body.features.length === 0){
            callback('Undefined place try another serch',undefined);
        }else{
            // const dnipro = body.features.filter((item) => item.id === 'poi.2808908687579');
            callback(undefined,{
                latitude: body.features[0].center[1],
                longtitude:  body.features[0].center[0],
                place_name:body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
