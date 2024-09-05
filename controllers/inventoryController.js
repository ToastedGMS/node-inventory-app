const { getAllParts, getCategories, getFromCategory, insertPart, deletePart, updatePart, getParttoUpdate } = require('../database/queries');

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

async function renderNew (req, res){
    try {
        res.render('newPart');
    } catch (error) {
        console.error('Error rendering New Part form:', error);
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
        const items = await getFromCategory(categoryId);
        res.render('inventoryAll', { items });
    } catch (error) {
        console.error('Error rendering items:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function addToInventory(req, res) {
    try {
        const { name, description, categoryId, price } = req.body;
        await insertPart(name, description, categoryId, price);
        res.redirect('/inventory');
    } catch (error) {
        console.error('Error adding items to inventory:', error)
        res.status(500).send('Internal Server Error');
    }
}

async function removePart(req, res) {
    try {
        const partId = req.body.part_id;
        await deletePart(partId);
        res.redirect('/inventory')
    } catch (error) {
        console.error('Error removing item from inventory:', error)
        res.status(500).send('Internal Server Error');
    }
}

async function updateItem(req, res) {
    try {
        const { part_id, name, description, price } = req.body;

        await updatePart(part_id, name, description, price)

        res.redirect('/inventory'); 
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getUpdate(req, res) {
    try {
        const partId = req.params.id;

        const result = await getParttoUpdate(partId);

        if (result.rows.length > 0) {
            const item = result.rows[0];
            res.render('editPart', { item });
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        console.error('Error fetching item:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getInventory,
    getAll,
    showCategories,
    showFromCategories,
    addToInventory,
    removePart,
    updateItem,
    renderNew,
    getUpdate
};