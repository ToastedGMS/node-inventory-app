function getHome(req, res) {
    try {
        res.redirect('/inventory');
    } catch (error) {
        console.error('Error rendering home view:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getHome
};