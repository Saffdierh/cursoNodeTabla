const argv = require('yargs')
	.options({
		'b': {
			alias: 'base',
			type: 'number',
			describe: 'Multiplo',
			demandOption: true
		},
		'h': {
			alias: 'hasta',
			type: 'number',
			describe: 'Multiplicador',
			demandOption: 'true'
		},
		'l': {
			alias: 'listar',
			demandOption: false,
			describe: 'Muestra en pantalla la tabla pedida',
			type: 'boolean'
		}
	})
	.check((argv, options) =>{
		if(isNaN(argv.b)){
			throw 'La base tiene que ser un numero'
		}
		return true
	})
	.argv

module.exports = argv
