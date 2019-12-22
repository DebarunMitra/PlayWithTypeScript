// function showTodo(todo:{title:string, text: string}){
//   console.log(todo.title+': '+todo.text);
// }
//
// let myTodo={title:'Debarun', text:'I am a software Developer'};
//
// showTodo(myTodo);


interface Todo{
  title: string;
  text: string;
}

function showTodo(todo: Todo){
   console.log(todo.title+': '+todo.text);
}

let myTodo={title:'Debarun', text:'I am a software Developer'};

showTodo(myTodo);
