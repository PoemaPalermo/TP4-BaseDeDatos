import { conn } from "./db.js";

const getCanciones = async (_, res) => {
    // Completar con la consulta que devuelve todas las canciones
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            ...
        ]
    */
        try
        {
            const[results,fields] = await conn.query
            (
                "SELECT * FROM canciones"
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const getCancion = async (req, res) => {
    // Completar con la consulta que devuelve una canción
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id de la canción",
            "nombre": "Nombre de la canción",
            "nombre_artista": "Id del artista",
            "nombre_album": "Id del album",
            "duracion": "Duración de la canción",
            "reproducciones": "Reproducciones de la canción"
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'SELECT * FROM canciones WHERE id = ?',
                [id]
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const createCancion = async (req, res) => {
    // Completar con la consulta que crea una canción
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
        try
        {
            const[results,fields] = await conn.query
            (
                'INSERT INTO canciones (id, nombre, album, duracion, reproducciones) VALUES (?, ?, ?, ?, ?)',
                ['id', 'nombre', 'album', 'duracion', 'reproducciones']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
    // (Reproducciones se inicializa en 0)
};

const updateCancion = async (req, res) => {
    // Completar con la consulta que actualiza una canción
    // Recordar que los parámetros de una consulta PUT se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
    // (Reproducciones no se puede modificar con esta consulta)
    try
        {
            const[results,fields] = await conn.query
            (
                'UPDATE artistas SET nombre = ?, album = ?, duración = ? WHERE id = ?',
                ['nombre', 'album', 'duracion', 'id']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const deleteCancion = async (req, res) => {
    // Completar con la consulta que elimina una canción
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
    try
        {
            const[results,fields] = await conn.query
            (
                'DELETE FROM canciones WHERE id = ?',
                ['id']
            );
            return results;
        }
        catch(err)
        {
            console.log(err);
        }
};

const reproducirCancion = async (req, res) => {
    // Completar con la consulta que aumenta las reproducciones de una canción
    // En este caso es una consulta PUT, pero no recibe ningún parámetro en el body, solo en los params
    try
    {
        const[results,fields] = await conn.query
        (
            'UPDATE canciones SET reproducciones = reproducciones++ WHERE id = ?',
            ['id']
        );
        return results;
    }
    catch(err)
    {
        console.log(err);
    }
};

const canciones = {
    getCanciones,
    getCancion,
    createCancion,
    updateCancion,
    deleteCancion,
    reproducirCancion,
};

export default canciones;
