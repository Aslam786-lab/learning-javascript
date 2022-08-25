url = "https://jsonplaceholder.typicode.com/posts/1";


//using promises
//GET method
// fetch(url)
// .then((response) =>{
//     if(response.ok){
//         return response.json()
//     }
//     throw new Error("Error found");
// })
// .then(data => console.log(data))



//POST method - ID will be automaticaly updated
// fetch(url,{
//     method: "POST",
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({
//         title: 'Food',
//         body:  'Humans required food to survive',
//         userId: 1,
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))




//using  async-await
//PUT method- need to pass id in url to update
const put = async() =>{
    try {
        
        const response = await fetch(url,{
            method:'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                id: 1,
                title: 'Food',
                body: 'Humans required food to survive',
                userId:1,
            }),
    
        })
        if (!response.ok){
            throw new Error('Error found')
        }
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    } 
}

// put()


//PATCH method
const patch = async() =>{
    const response = await fetch(url,{
        method: 'PATCH',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
            title: 'FOOD',
        }),
    })

    const data = await response.json()
    console.log(data);

}

// patch()



//DELETE
const deleted = async() =>{
    const response = await fetch(url,{
        method: 'DELETE',
    })
}

