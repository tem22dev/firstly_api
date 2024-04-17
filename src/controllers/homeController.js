const homeController = (req, res) => {
    res.render('home.ejs'); // Tạo view động
};

const userController = (req, res) => {
    res.json({id: 1, name: 'Trung Em'});
};

module.exports = { homeController, userController };