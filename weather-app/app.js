const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if(!process.argv[2]){
    console.log("Provide please sity");
}else{
    geocode(process.argv[2], (error,data)=>{
        if(error){
            console.log(error)
        }else {
            forecast(data.longtitude,data.latitude,(error,forecastdata)=>{
                if(error){
                    console.log(error);
                }else {
                    console.log(data.place_name);
                    console.log(forecastdata);
                }
            });
        }
    });

}

