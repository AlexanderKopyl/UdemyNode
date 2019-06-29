const https = require('https');

const url = {
    urls: 'https://api.darksky.net/forecast/',
    apiKey: 'f7e71606d23737657a8bf5d2b7937428',
    lang: 'ru',
    units: 'auto',
    lat:40,
    long:-75,

    out() {
        return this.urls + this.apiKey + '/' + this.lat + "," + this.long+"?lang=" + this.lang + "&units=" + this.units
    }
};


const request = https.request(url.out(),(response)=>{
    let data = '';

    response.on('data',(chunk)=>{
        data = data + chunk.toString();
    });
    response.on('end',()=>{
            const body = JSON.parse(data);
            console.log(body);
    });

});

response.on('error',(error)=>{
    console.log("An error", error)
});

response.end();