const { debug } = require('console');
const fs = require('fs'); //utilizaremos fileSystem para la base de datos "Api"

class  Crud
{
    nombreArchivo
    constructor(nombreArchivo)
    {
        this.nombreArchivo = `./database/${nombreArchivo}.json`;
    }
    async getItem () // muestra los elementos del archivo. 
    {
        try 
        {
            const archivo = await fs.promises.readFile(`${this.nombreArchivo}`, 'utf8')||[];
            if(archivo == undefined )
            {
                archivo = [];
                await fs.promises.writeFile(`${this.nombreArchivo}`, archivo, 'utf8');
                const archivoParsed = JSON.parse(archivo);
                console.log("archivo vacio creado con exito!");
                return archivoParsed
            }
            else
            {   
                const archivoParsed = JSON.parse(archivo);
                console.log("archivo leido con exito!");
                return archivoParsed
            }
        } 
        catch (error) 
        {
            console.log(error.code);
        }
    };
    async postItem (obj) // agrega elementos al archivo.
    {
        try 
        {
            const ultimoArchivo = await this.getItem();
            if(ultimoArchivo === undefined)
            {
                const primerElemento = JSON.stringify(obj)
                await fs.promises.writeFile(`${this.nombreArchivo}`,primerElemento);//elemento creado
                console.log("primer elemento agregado!");
            }
            else
            {
                const nuevoArchivo = ultimoArchivo
                nuevoArchivo[ultimoArchivo.length]=obj
               
                await fs.promises.writeFile(`${this.nombreArchivo}`, JSON.stringify(nuevoArchivo), 'utf8');
                console.log("Archivo creado con exito!");       
            }
        } 
        catch (error) 
        {
            throw (error.message);
        }
    };
    async putItem () // edita un elemento en el archivo. 
    {

    };
    async deleteItem () //  elimina un elemento en el archivo.
    {

    }    
    }
module.exports = Crud;