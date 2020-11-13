import * as express from 'express';
import * as ChirpStore from '../utilities/chripstore'

const router = express.Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if(id) {
        let oneChirp = ChirpStore.GetChirp(id)
        res.json({id: id, ...oneChirp})
    } else {
      const data = (ChirpStore.GetChirps());
      const chirps = Object.keys(data).map(key => {
          return {
              id: key,
              user: data[key].user,
              text: data[key].text
          }
      })
      chirps.pop()
      res.json(chirps)
    }
});



router.post('/', (req, res, next) => {
    let chirp = req.body;
    ChirpStore.CreateChirp(chirp);
    res.sendStatus(200)
});

router.delete('/:id', (req, res) => {
    let id = req.params.id
    ChirpStore.DeleteChirp(id);
    res.send(ChirpStore.GetChirps());
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;
    ChirpStore.UpdateChirp(id, chirp);
    res.send(ChirpStore.GetChirps());
})

export default router;



