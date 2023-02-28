const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')
console.clear()

//const [ , , arg3 = 'base=4' ] = process.argv
//const [ , base=4 ] = arg3.split('=')
console.log('base: yargs'.magenta, argv.base)

//console.log(base)

let base
crearArchivo(argv.b, argv.h, argv.l)
	.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
	.catch(err => console.log(err))
