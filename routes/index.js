const { getData, postData, deleteData, putData } = require('../controllers/main.controller')

const router = require('express').Router()

//GET, POST, PUT, DELETE
router.get('/',  getData)

router.post('/', postData)

router.put('/', putData)

router.delete('/', deleteData)

module.exports = router;