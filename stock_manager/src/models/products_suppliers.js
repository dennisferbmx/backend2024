const products_suppliersQueries = {
    getAll: 'SELECT * FROM products_suppliers', //SELECT * FROM staff WHERE is_active = 1
    getById: 'SELECT * FROM products_suppliers WHERE id = ?', // AND is_active = 1
    getByProduct_id: 'SELECT * FROM products_suppliers WHERE product_id=?',
    create: 'INSERT INTO products_suppliers (product_id, supplier_rfc, notes) VALUES (?, ?, ?)',
    update: 'UPDATE products_suppliers SET product_id = ?, supplier_rfc = ?, notes = ?',
    delete: 'UPDATE products_suppliers SET is_active = 0 WHERE id = ?'
  };
  
  module.exports = { products_suppliersQueries };