import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
  app.use('/new', newsRouter)
  app.use('/home', siteRouter)
  app.use('/search', siteRouter)
}

export default route;
