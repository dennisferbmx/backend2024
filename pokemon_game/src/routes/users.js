const { Router } = require('express');
const { getAllUsers, createUser, getUser } = require('../controllers/users');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id');
router.delete('/:id');

module.exports = router;