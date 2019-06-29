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

    request({url:mapBoxUrl.out(), json: true},(error, response, {features:[item1],features})=>{
        const {center:[itemLat,item2Long] ,place_name} = item1;

        console.log()
        if(error){
            callback("Error connection",undefined);
        }else if(features.length === 0){
            callback('Undefined place try another serch',undefined);
        }else{
            // const dnipro = body.features.filter((item) => item.id === 'poi.2808908687579');
            // callback(undefined,{
            //     latitude: item1.center[1],
            //     longtitude:  item1.center[0],
            //     place_name: item1.place_name
            // });
            callback(undefined,{
                latitude:itemLat,
                longtitude:item2Long,
                place_name
            });
        }
    });
};

module.exports = geocode;
