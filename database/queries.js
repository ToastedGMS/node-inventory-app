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

module.exports = {
    getAllParts,
    getCategories
}