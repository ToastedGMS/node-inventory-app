const pool = require('./pool');

async function getAllParts() {
    try {
        const result = await pool.query('SELECT * FROM parts');
        return result.rows;
    } catch (error) {
        console.error('Error retrieving inventory items:', error);
        throw error;
    }
}

async function getCategories() {
    try {
        const categories = await pool.query('SELECT * FROM categories');
        return categories.rows;
    } catch (error) {
        console.error('Error retrieving categories:', error);
        throw error;
    }
}

async function getFromCategory(categoryId) {
    try {
        const result = await pool.query('SELECT * FROM parts WHERE category_id = $1', [categoryId]);
        return result.rows;
    } catch (error) {
        console.error('Error retrieving items:', error);
        throw error;
    }
}

async function insertPart(name, description, categoryId, price) {
    try {
        await pool.query(
            'INSERT INTO parts (name, description, category_id, price) VALUES ($1, $2, $3, $4);'
        , [name, description, categoryId, price])
    } catch (error) {
        console.error('Error inserting item to parts table:', error);
        throw error;
    }
}

module.exports = {
    getAllParts,
    getCategories,
    getFromCategory, 
    insertPart
}