import * as path from 'path';
import * as express from 'express';
import routes from './routes';

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use('/api', routes);

let p = path.join(__dirname, '../public/index.html');

app.get("*", (req, res) => {
    res.sendFile(p)
})

//when an entire folder is referenced in app.use, it automatically looks for an index

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})
