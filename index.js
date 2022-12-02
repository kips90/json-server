
// fetch("url")
// .then(function (r){
//     return r.json()
// })
// .then(function(){
//     // utilize
//     // console
//     // display
// })

fetch("http://localhost:3000/todos")
.then((response)=>{
   return response.json()
})
.then((todos)=>{
   
   const todoContainer = document.getElementById("todo_container");
   console.log(todoContainer)
   
   for(let todo of todos)
   {
    console.log(todo)
       todoContainer.innerHTML += `<div class="single-todo">
        <h4>${todo.title}</h4>
        <p>${todo.description}</p>
        <p>${todo.completed?"Todo completed":"Todo not completed"}</p>
        <p>${todo.id}</>
       </div>`
   }

})
