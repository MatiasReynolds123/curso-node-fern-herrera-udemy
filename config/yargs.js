const argv = require('yargs')
                    .option('b', {
                         alias: 'base',
                         type: 'number',
                         demandOption: true,
                         description: 'Es la base de la tabla de multiplicar'
                    })
                    .check( (argv, options) => {
                         if (isNaN( argv.base )) {
                              throw 'La base tiene que ser un número'
                         }
                         return true;
                    })
                    .option( 'l', {
                         alias: 'listar',
                         type: 'boolean',
                         default: false,
                         description: 'Muestra nuestra tabla en la consola'
                    })
                    .option( 'h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Este es el numero hasta donde quieres la tabla de multiplicar'
                    })
                    .argv;

module.exports = argv;
