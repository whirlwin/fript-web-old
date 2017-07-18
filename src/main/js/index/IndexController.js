class IndexController {

    renderIndexView(req, res) {
        console.log(req.user);
        res.render('index/view', { user: req.user });
    }
}

module.exports = IndexController;