const { getAllParts, getCategories, getFromCategory } = require('../database/queries');

function getInventory(req, res) {
    try {
        res.redirect('/inventory/all');
    } catch (error) {
        console.error('Error rendering inventory view:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getAll(req,res){
    try{
        const items = await getAllParts();
        res.render('inventoryAll', {items});
    } catch (error){
        console.error('Error rendering inventory items:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function showCategories(req, res) {
    try {
        const categories = await getCategories();
        res.render('categories', {categories})
    } catch (error) {
        console.error('Error rendering categories:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function showFromCategories(req, res) {
    try {
        const categoryId = req.query.category_id;
        console.log('Category ID:', categoryId);
        const items = await getFromCategory(categoryId);
        res.render('inventoryAll', { items });
    } catch (error) {
        console.error('Error rendering items:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getInventory,
    getAll,
    showCategories,
    showFromCategories
};