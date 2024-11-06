const {Router} = require('express');
const {getAll, getUserById, postUser, updateUser, deleteUser} = require('../controllers/users');

const router = Router();

router.get('/', getAll);
router.get('/:id', getUserById);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;