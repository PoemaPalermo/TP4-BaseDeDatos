import express from "express";
const app = express();
const port = 3000;

import artistas from "./controllers/artistas.js";
import albumes from "./controllers/albumes.js";
import canciones from "./controllers/canciones.js";

app.use(express.json());

app.get("/", (_, res) => {
    res.send("SpoTICfy API working!");
});

/* ------------------- Rutas ------------------- */

// Artistas
// Completar con las rutas de artistas
// Para acceder a cada funcion de artistas, se debe hacer de la siguiente forma:
// artistas.getArtistas;
// artistas.getArtista;
// ...

// Albumes
// Completar con las rutas de albumes
// Para acceder a cada funcion de albumes, se debe hacer de la siguiente forma:
// albumes.getAlbumes;
// albumes.getAlbum;
// ...

// Canciones
// Completar con las rutas de canciones
// Para acceder a cada funcion de canciones, se debe hacer de la siguiente forma:
// canciones.getCanciones;
// canciones.getCancion;
// ...

app.listen(port, () => {
    console.log(`SpoTICfy API listening at http://localhost:${port}`);
});

app.get("/albumes", async(_,res) => { //get all
    res.send(await albumes.getAlbumes);
});
app.get("/albumes/:id", async(req,res) => { //get by id
    let id = req.params.id
    res.send(await albumes.getAlbumes);
});
app.post("/albumes", async(req,res) => { // insert
    let albumRecibido = req.boy;
    let resultado = await albumes.createAlbum(albumRecibido);
    res.send(await albumes.getAlbumes);
});
app.put("/albumes/:id", async(req,res) => { //update
    let objetoEnviado = {
        "nombre": req.body.nombre,
        "id": req.params.id,
        "artista": req.params.artista
    }
});
app.delete("/albumes/:id",async(req, res) => { //delete
    let id = req.params.id;
    res.send(await albumes.deleteAlbum(id));
})







app.get("/artistas", async(_,res) => { //get all
    res.send(await artistas.getArtistas);
});
app.get("/artistas/:id", async(req,res) => { //get by id
    let id = req.params.id
    res.send(await artistas.getArtistas);
});
app.post("/artistas", async(req,res) => { // insert
    let artistaRecibido = req.boy;
    let resultado = await albumes.createArtista(artistaRecibido);
    res.send(await artistas.getArtistas);
});
app.put("/artistas/:id", async(req,res) => { //update
    let objetoEnviado = {
        "nombre": req.body.nombre,
        "id": req.params.id
    }
});
app.delete("/artistas/:id",async(req, res) => { //delete
    let id = req.params.id;
    res.send(await artistas.deleteArtista(id));
})







app.get("/canciones", async(_,res) => { //get all
    res.send(await canciones.getCanciones);
});
app.get("/canciones/:id", async(req,res) => { //get by id
    let id = req.params.id
    res.send(await canciones.getCanciones);
});
app.post("/canciones", async(req,res) => { // insert
    let cancionRecibido = req.boy;
    let resultado = await canciones.createCancion(cancionRecibido);
    res.send(await canciones.getCanciones);
});
app.put("/canciones/:id", async(req,res) => { //update
    let objetoEnviado = {
        "nombre": req.body.nombre,
        "id": req.params.id,
        "album": req.params.album, // corregir porque es una Clave foranea y no se si esta bien escrito
        "duracion": req.body.duracion,
        "reproducciones": req.body.reproducciones
    }    
});
app.delete("/canciones/:id",async(req, res) => { //delete
    let id = req.params.id;
    res.send(await canciones.deleteCancion(id));
})