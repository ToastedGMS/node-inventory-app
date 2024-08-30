function getHome(req, res) {
    try {
        res.render('home');
    } catch (error) {
        console.error('Error rendering home view:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getHome
};