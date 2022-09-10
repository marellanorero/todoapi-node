let tasks = [];

const getData = (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method GET')
    return response.status(200).json({ tasks: tasks })
}

const postData = (request, response) => {
    //request.params
    //console.log(request.body)
    const task = request.body
    tasks.push(task)
    return response.status(200).json({ tasks })
    
    //tasks.push(request.body)
}

const putData = (request, response) => {
    //request.params
    const task = request.body
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i] == task){
            tasks.splice(tasks[i], 1)
            tasks.push({task: request.body.task})
        }
    }
    response.status(200).json({ task })
}

const deleteData = (request, response) =>{
    //request.params
    tasks = tasks.map(function(task){
        return tasks.pop()
    })
    response.status(200).json({ tasks })
}


module.exports = {
    getData,
    postData,
    putData,
    deleteData
}