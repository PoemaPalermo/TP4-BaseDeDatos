import { conn } from "./db.js";

const getAlbumes = async (_, res) => {
    // Completar con la consulta que devuelve todos los albumes
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": 1,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            {
                "id": 2,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            ...
        ]
    */
   
        try
        {
            const[results,fields] = await conn.query
            (
                "SELECT * FROM albumes"
            );
            res.json(results);
        }
        catch(err)
        {
            console.log(err);
        }
        
};

const getAlbum = async (req, res) => {
    // Completar con la consulta que devuelve un album por id
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": 1,
            "nombre": "Nombre del album",
            "nombre_artista": "Nombre del artista"
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'SELECT * FROM albumes WHERE id = ?',
                [req.params.id]
            );
            res.json(results);
        }
        catch(err)
        {
            console.log(err);
        }
        
};

const createAlbum = async (req, res) => {
    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'INSERT INTO albumes (id, nombre, artista) VALUES (?, ?, ?)',
                [req.params.id, req.params.nombre, req.params.artista]
            );
            res.json(results);
        }
        catch(err)
        {
            console.log(err);
        }

};

const updateAlbum = async (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'UPDATE albumes SET nombre = ?, artista = ? WHERE id = ?',
                [req.params.nombre, req.params.artista, req.params.id]
            );
            res.json(results);
        }
        catch(err)
        {
            console.log(err);
        }
};

const deleteAlbum = async (req, res) => {
    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
    try
        {
            const[results,fields] = await conn.query
            (
                'DELETE FROM albumes WHERE id = ?',
                [req.params.id]
            );
            res.json(results);
        }
        catch(err)
        {
            console.log(err);
        }
};

const getCancionesByAlbum = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
    try
        {
            const[results,fields] = await conn.query
            (
                'SELECT * FROM canciones JOIN albumes ON canciones.album = albumes.id WHERE albumes.id = ? ',
                [req.params.id]
            );
            res.json(results);
        }
        catch(err)
        {
            console.log(err);
        }
};

const albumes = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};

export default albumes;
