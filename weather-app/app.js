const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if(!process.argv[2]){
    console.log("Provide please sity");
}else{
    geocode(process.argv[2], (error,{latitude,longtitude, place_name})=>{
        if(error){
            console.log(error)
        }else {
            forecast(longtitude,latitude,(error,forecastdata)=>{
                if(error){
                    console.log(error);
                }else {
                    console.log(place_name);
                    console.log(forecastdata);
                }
            });
        }
    });

}

