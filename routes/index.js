const { getData, postData } = require('../controllers/main.controller')

const router = require('express').Router()

//GET, POST, PUT, DELETE
router.get('/',  getData)

router.post('/', postData)

router.put('/', (request, response) =>{
    //request.params
    console.log(request.body)
    console.log('API REST on method PUT')
    return response.status(200).json({ 'message': 'API REST with PUT method'})
})

router.delete('/', (request, response) =>{
    //request.params
    console.log('API REST on method DELETE')
    return response.status(200).json({ 'message': 'API REST with DELETE method'})
})

module.exports = router;