const fs = require('fs')


const crearArchivo = async(base = 5, multiplicador = 10, listar = false) => {
	try{
		let salida = ''

		for(let i = 1; i<=multiplicador; i++){
			salida += `${base} X ${i} = ${base*i} \n`
		}

		if(listar == true){
			console.log(salida)
		}

		fs.writeFileSync(`./salida/tabla${base}.txt`, salida)

		return `tabla${base}.txt creado`
	} catch(err){
		throw err
	}
}

/*const crearArchivo = (base = 5) => {

	return new Promise((resolve, reject) => {
		let salida = ''

		for(let i = 1; i<=10; i++){
			salida += `${base} X ${i} = ${base*i} \n`
		}

		console.log(salida)

		fs.writeFileSync(`tabla${base}.txt`, salida)

		resolve(`tabla${base}.txt creado`)
	})
}*/
module.exports = { crearArchivo }
