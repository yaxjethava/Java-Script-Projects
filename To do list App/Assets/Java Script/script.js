let form = document.getElementById("input")
let user_input = document.getElementById("user-input");
let tasks_list_box = document.querySelector(".tasks-list-box");

//for completed and pending button
let completed_btn = document.getElementById("completed-task-btn")
let pending_btn = document.getElementById("pending-task-btn")

//for edit pop-up
let edit_pop_up = document.getElementById("pop-up-for-edit");
edit_pop_up.style.display = "none";
let edit_form = document.getElementById("edit-form");
let edit_user_input = document.getElementById("user-input-for-edit")

//take tasks from localStorage
let tasks_array = JSON.parse(localStorage.getItem("tasks_data")) || []


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (user_input.value != "") {

        let same_tasks = tasks_array.filter(val => val === user_input.value);

        if (same_tasks.length == 0) {

            tasks_array.push(user_input.value);
            localStorage.setItem("tasks_data", JSON.stringify(tasks_array));
            allCardsMaker(tasks_array)
        }
    }
    user_input.value = "";
})


allCardsMaker(tasks_array);

//for remove that index from arraye
function removeTask(index) {
    //remove that index from array
    tasks_array.splice(index, 1);

    //set that new array in local storage
    localStorage.setItem("tasks_data", JSON.stringify(tasks_array));

    //and make new card using new array
    allCardsMaker(tasks_array)
}

//for edit task function
function edit_task(i) {
    edit_pop_up.style.display = "flex";

    //assign localstorage array's value in default
    edit_user_input.value = tasks_array[i];

    edit_form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(edit_user_input.value)

        if (edit_user_input.value != "") {
            //replace that array's index value with new value
            tasks_array.splice(i, 1, edit_user_input.value);

            localStorage.setItem("tasks_data", JSON.stringify(tasks_array));
            console.log(tasks_array);
            window.location.reload()
        }

        allCardsMaker(tasks_array)
        edit_pop_up.style.display = "none";
    })
}

function allCardsMaker(Array_name) {

    tasks_list_box.innerHTML = ``
    // console.log(Array_name)

    if (Array_name.length == 0) {
        tasks_list_box.innerHTML = `<h2>Add Your Tasks</h2>`

    } else {
        // console.log(val);
        Array_name.forEach((val, i) => {
            tasks_list_box.innerHTML += `
            <div class="list-card">
            <div class="cheak-btn" style="display:none;">
            <input type="checkbox" id="cheak-1" class="cheak-box">
            </div>
            <div class="task">${val}</div>
            
            <div class="edit-remove-btn-box">
            <div class="edit-btn" onclick="edit_task(${i})">
            <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="remove-btn" onclick='removeTask(${i})'>
            <i class="fa-solid fa-trash-can"></i>
            </div>
            </div>
            </div>`
        });
    }
}
