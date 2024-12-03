const userQueries = {
    getAll: 'SELECT * FROM users',
    getByEmail: 'SELECT * FROM users WHERE email =?',
    addUser: 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    getById: 'SELECT * FROM users WHERE id = ?',

}

module.exports = userQueries;