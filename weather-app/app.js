const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Dnepr Ukrain', (error,data)=>{
    if(error){
        console.log(error)
    }else {
        forecast(data.longtitude,data.latitude,(error,data)=>{
            if(error){
                console.log(error);
            }else {
                console.log(data);
            }
        });
    }
});

