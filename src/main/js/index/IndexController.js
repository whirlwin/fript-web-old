class IndexController {

    renderIndexView(req, res) {
        console.log(req.user);
        res.render('index/index', { user: req.user });
    }
}

module.exports = IndexController;