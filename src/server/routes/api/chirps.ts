import * as express from 'express';
import * as Chirps from '../../utilities/chirpstore'

const router = express.Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if(id) {
        res.send(Chirps.GetChirp(id))
    } else {
    res.send(Chirps.GetChirps());
    }
});



router.post('/', (req, res, next) => {
    let chirp = req.body;
    Chirps.CreateChirp(chirp);
    res.send(Chirps.GetChirps());
    res.sendStatus(201);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Chirps.DeleteChirp(id);
    res.send(Chirps.GetChirps());
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;
    Chirps.UpdateChirp(id, chirp);
    res.send(Chirps.GetChirps());
})

export default router;



