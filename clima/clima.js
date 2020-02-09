const axios = require('axios');

const obtenerClima = async ( lati, lng ) =>{
 
   const resps = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${lng}&appid=27afddfc9f94ffe29024c7e36a0742c3&units=metric`);
    
   return resps.data.main.temp;
}

module.exports = {
obtenerClima
}