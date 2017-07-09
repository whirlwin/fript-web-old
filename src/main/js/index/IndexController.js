class IndexController {

    renderIndexView(req, res) {
        res.send(200);
        //res.render('matching/view');
    }
}

module.exports = IndexController;