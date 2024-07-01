import { conn } from "./db.js";

const getArtistas = async (_, res) => {
    // Completar con la consulta que devuelve todos los artistas
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            ...
        ]
    */
        try
        {
            const[results,fields] = await conn.query
            (
                "SELECT * FROM artistas"
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const getArtista = async (req, res) => {
    // Completar con la consulta que devuelve un artista
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id del artista",
            "nombre": "Nombre del artista"
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'SELECT * FROM artistas WHERE id = ´id´ = ?',
                [id]
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const createArtista = async (req, res) => {
    // Completar con la consulta que crea un artista
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista",
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'INSERT INTO artistas (id, nombre) VALUES (?, ?)',
                ['id', 'nombre']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const updateArtista = async (req, res) => {
    // Completar con la consulta que actualiza un artista
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista"
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'UPDATE artistas SET nombre = ? WHERE id = ?',
                ['nombre', 'id']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }

};

const deleteArtista = async (req, res) => {
    // Completar con la consulta que elimina un artista
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
    try
        {
            const[results,fields] = await conn.query
            (
                'DELETE FROM artistas WHERE id = ?',
                ['id']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const getAlbumesByArtista = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getAlbumes
    try
        {
            const[results,fields] = await conn.query
            (
                'SELECT * FROM albumes JOIN artista ON albumes.artista = artistas.id WHERE artistas.id = ? ',
                ['id']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const getCancionesByArtista = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista
    // (tener en cuenta que las canciones están asociadas a un álbum, y los álbumes a un artista)
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
    try
        {
            const[results,fields] = await conn.query
            (
                'SELECT * FROM canciones JOIN albumes ON canciones.album = albumes.id JOIN artistas ON albumes.artista = artista.id WHERE artistas.id = ? ',
                ['id']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const artistas = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};

export default artistas;
