class SiteController {

  home(req, res) {
    res.render('new');
  }

  search(req, res) {
    res.send('cource');
  }
}

export default new SiteController;
