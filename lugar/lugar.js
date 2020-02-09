const axios = require('axios');

const getLugarLngLat = async (dir) =>{
    const encodeUrl = encodeURI(dir);
    //console.log(encodeUrl);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key'  : '3b6da5dfe6mshbb8edd9b535a3f1p175fe0jsn8cfb77e3786d',
            'x-rapidapi-host' : 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
      });
    
     const resp = await instance.get();
        
     if(resp.data.Results.length === 0){
         throw new Error(`No se han encontrado registros para "${dir}"`);
     }

     const data = resp.data.Results[0];
     const direccion = data.name;
     const lat = data.lat;
     const lng = data.lon;
                 

     return {
         direccion,
         lat, 
         lng
        }
}

module.exports = {
    getLugarLngLat
}
