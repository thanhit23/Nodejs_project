class SiteController {

  home(req, res) {
    res.render('home');
  }

  search(req, res) {
    res.send('cource');
  }
}

export default new SiteController;
