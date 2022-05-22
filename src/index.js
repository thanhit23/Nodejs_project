import path from 'path';
import express from 'express';
import pkg from 'express-handlebars';
const __dirname = path.resolve();
const { engine } = pkg;
const app = express();
const port = 3000;
import route from './routes/index.js';

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route initial
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
