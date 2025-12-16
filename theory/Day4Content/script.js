let container = document.getElementById('dom');



{/* <h1>Example for Real Dom</h1>
    <input placeholder="Enter Your Name">
    <button>Add me</button>
    <p></p> */}


function render(){
    //step1 : creating the heading
    const heading =  document.createElement('h1');
    heading.innerText = 'Example for Real Dom';


    // step 2: creating input filed and will place the placeholder attribute


    const input = document.createElement('input');
    console.log(input);


    input.placeholder ="Enter your name";

    //step 3: Creating a button
    const btn = document.createElement('button');
    btn.innerText =  'Add me time';
    btn.addEventListener('click',render)


    //step 4: creating para that displays the date and time


    const para = document.createElement('p');
    para.innerText = new Date().toTimeString();


    //step 5: appendinmg the tags in container
     container.innerHTML = '';
    container.append(heading,input,btn,para)

    
}

render();