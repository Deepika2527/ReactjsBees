let h1 = React.createElement('h1',{id:'heading'},'Hello,ReactJs');
console.log(h1);

// <h1 id ="heading">Hello,React Js </h1>


//para

let  p = React.createElement('p',{className:'para'},'Hello para');


let container = React.createElement('div',null,h1,p)
let root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);

// root.render(h1)
root.render(container)
