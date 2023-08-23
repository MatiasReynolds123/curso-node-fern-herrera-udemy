const fs = require('fs');

const colors = require('colors');

const crearArchivo = async( base, l = false, h = 10 ) => {
    

    try {
        let salida = '';
        let consola = '';

        for(let i = 1; i <= h; i++) {
            salida += `${base} x ${ i } = ${ base * i}\n`;
            consola += `${base} ${ 'x'.red} ${ i } ${ '='.red} ${ base * i}\n`;
        }

        if( l ) {
        console.log('========================='.green);
        console.log ('      Tabla del:'.green, colors.blue( base ));
        console.log('========================='.green)
        console.log( consola);
        }
       
        fs.writeFileSync(`./salidas/tabla-${ base }.txt`, salida );
        
        return `tabla-${ base }.txt`;
    } catch (e) {
        throw e;
    }

}

module.exports = {
    crearArchivo
};