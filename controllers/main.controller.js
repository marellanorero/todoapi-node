let tasks = [];

const getData = (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method GET')
    return response.status(200).json({ tasks: tasks })
}

const postData = (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method POST')
    return response.status(201).json({ 'message': 'API REST on method POST'})
}




module.exports = {
    getData,
    postData,

}