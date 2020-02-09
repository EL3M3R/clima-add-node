const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/*
lugar.getLugarLngLat(argv.direccion)
                    .then(console.log);

                

clima.obtenerClima(40.750000 , -74.000000)
            .then(console.log)
            .catch(console.log);*/

const getInfo = async (direccion) => {

    try {
        const m_lugar = await lugar.getLugarLngLat(direccion)
        
        const lat       = m_lugar.lat;
        const lon       = m_lugar.lng;

        const m_clima = await clima.obtenerClima(lat , lon)
                
       // return  `*** El clima para ${direccion} es de ${m_clima}`;
        console.log(`*** El clima para ${direccion} es de ${m_clima}`   );
    }

    catch (error) {
        console.log(`No se ha podido determinar el clima para ${direccion}`);
    }
}

getInfo(argv.direccion);
    


