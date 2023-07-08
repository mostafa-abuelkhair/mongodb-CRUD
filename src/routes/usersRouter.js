const express = require('express');
const {getUsers,getUserById,createUser,updateUser,deleteUser} = require('../controllers/usersController');
const router = express.Router();

// middleware that is specific to this router
router.use(express.json());



//here the CURD methodes routes to it's controllers
router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
