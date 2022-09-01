// const frontUrl="http://127.0.0.1:5500/to-do-list/index.html"
const getUrl ="http://localhost:3000/todo?_sort=id&_order=desc"
const putUrl ="http://localhost:3000/todo"
const addButton =document.querySelector('.button')
const deleteButton = document.querySelector('ul')


//fetching from server
const getServerList=function(){
    return new Promise(resolve =>{
        fetch(getUrl)
        .then(response => {return response.json()})
        .then(data => resolve(data))
    })
}
getServerList().then(todos => getText(todos))

//displaying promise object one by one in dom
function getText(todo){
   
        todo.forEach(element => {
            const li = document.createElement('li')
            li.setAttribute("contenteditable", "true")
            li.setAttribute('spellcheck', false)
            li.innerHTML=element.text+`  <button class='button delete'>delete <p hidden>${element.id}</p></button>`
            document.querySelector('ul').append(li)
        })
        
}


//adding text to the server
function addText(text){

    return new Promise((resolve)=>{
        fetch(putUrl,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({text: text})
        }).then(response=> response.json())
        .then(data => resolve(data))
    })

}

//passing text to the server and displaying on dom    
addButton.addEventListener('click',function(){
   const text =document.querySelector('.text').value
   if(text === ''){
    return
   }
   addText(text).then(response => {
    getText(response)
   })
})





//delete from the server

deleteButton.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
       const id= e.target.childNodes[1].textContent
       fetch(`${putUrl}/${id}`,{
        method:'DELETE'
       })
   
    }   
})
    
        

