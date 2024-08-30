function getInventory(req, res) {
    try {
        res.render('inventory');
    } catch (error) {
        console.error('Error rendering inventory view:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getInventory
};