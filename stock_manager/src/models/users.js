const usersQueries = {
    getAll: 'SELECT * FROM users',
    getById: 'SELECT * FROM users WHERE id = ?1'
};

module.exports = {usersQueries};