class NewsController {

  index(req, res) {
    res.render('new');
  }

  show(req, res) {
    res.send('cource');
  }
}

export default new NewsController;
