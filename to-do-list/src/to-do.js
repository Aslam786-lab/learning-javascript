// const frontUrl="http://127.0.0.1:5500/to-do-list/index.html"
const getUrl ="http://localhost:3000/todo"
const putUrl ="http://localhost:3000/todo"
const addButton =document.querySelector('.button')
const ulTag = document.querySelector('ul')


//fetching from server
const getServerList=function(){
    return new Promise(resolve =>{
        fetch(getUrl)
        .then(response => {return response.json()})
        .then(data => resolve(data))
    })
}
getServerList().then(todos => getText(todos))


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
// ====================================================



//displaying promise object one by one in dom



function getText(todo){
   let arr=[]
    todo.forEach((element,i) => {
        const li = document.createElement('li')
        li.setAttribute("contenteditable", "true")
        li.setAttribute('spellcheck', false)
        li.innerHTML=`<span data-element-id=${element.id}>${element.text}</span>`
        // +`<p hidden>${element.id}</p>`
        +`<div class="bothButton"><button class="button done" data-id=${i}>done</button>`
        +`  <button class='button delete'>delete</button></div>`
        
        arr.push(li)
        // document.querySelector('ul').append(li)
    })
    arr.reverse().forEach((item,i,arr)=>{
        ulTag.append(arr[i])
    })
}


//passing text to the server and displaying on dom   
function displayDom(){
    const text =document.querySelector('.text').value
   if(text === ''){
    return
   }
   addText(text).then(response => {
    getText(response)
   })
}


addButton.addEventListener('click',function(){
   displayDom()
})

document.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        displayDom()
    }
})




// ========================================================
//strike the todo
ulTag.addEventListener('click',(e)=>{
    if(e.target.classList.contains('done')){
       const listId = e.target.dataset.id
       const id = ulTag.childNodes.length-1-listId
       let liText= ulTag.childNodes[id].childNodes[0];
       liText.innerHTML=`<del>${liText.textContent}</del>`
        
    }
})


// =======================================================
//delete from the server

ulTag.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
       const id= e.target.parentElement.parentElement.childNodes[0].dataset.elementId
       
       
       fetch(`${putUrl}/${id}`,{
        method:'DELETE'
       })
   
    }   
})
    
        

