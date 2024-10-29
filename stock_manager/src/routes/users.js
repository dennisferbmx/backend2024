const {Router} = require('express');
const {getAll, getById, postUser, updateUser, deleteUser} = require('../controllers/users');

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;