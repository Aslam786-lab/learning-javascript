
const url ="https://jsonplaceholder.typicode.com/posts"
const deleteButton = document.querySelector(".delete")




fetch(url)
.then((response) =>{
    return response.json()
})
.then((data)=>{
    const table =`<table class="table">
        <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
        </thead>
        <tbody>
            ${data.map((data)=>`<tr>
                <td id="ID">${data.id}</td>
                <td>${data.title}</td>
                <td>${data.body}</td>
              </tr>`).join("\n")
            }
            
        </tbody>
    </table>`

    document.querySelector("#table").innerHTML = table;
})


deleteButton.addEventListener("click", () =>{

    (function deletedArray(){
            const deleteId = parseInt(document.querySelector(".deleteId").value)
            const table=document.getElementById("table").firstChild
            const ids = document.querySelectorAll("#ID")
            let arr=[]
            for(let i=0;i<ids.length;i++){
                arr.push(parseInt(ids[i].textContent))
            }
            if(!isNaN(deleteId) && arr.includes(deleteId) ){
                table.deleteRow(arr.indexOf(deleteId)+1)
            }
        
    }())
    

        
    
})
