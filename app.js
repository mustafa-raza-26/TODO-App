let storage = 'listdata'
let array = JSON.parse(localStorage.getItem(storage)) || ['abc', '123'];
let inputValue = document.getElementById('task')
let taskList = document.getElementById('taskList')

function save() {
    localStorage.setItem(storage, JSON.stringify(array))
}
function add() {
    if (inputValue.value !== "") {
        array.push(inputValue.value)
        inputValue.value = ""
        save();
        render(); 
    }
}

render()
function render() {
    taskList.innerHTML = ``
    for (let i = 0; i < array.length; i++) {
        taskList.innerHTML += `<li> ${array[i]}  <button class="bb1" onclick="edit(${i})">Edit</button>  <button class="bb1" onclick="del(${i})">Delete</button> </li><br>`
    }
}

function edit(num) {
    let updateValue = prompt("Enter New Value")
    console.log(num);
    
    if (updateValue) {
        array.splice(num,1,updateValue)
        save();
    }
    render();
}

function del(num) {
    array.splice(num,1)
    save();
    render();
}