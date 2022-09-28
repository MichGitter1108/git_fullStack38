var tasks = [];

var singleTaskDV = '';

function resetForm() 
{
    Swal.fire({
        title: 'Are you sure you want to reset?',
        text: "You won't be able to revert this! 🙁",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => 
        {
            if (result.isConfirmed) 
            {
                Swal.fire(
                'Deleted!',
                'Your file has been deleted. 👍🏻',
                'success')
                tasksForm.reset();
            }
        })
}

if (localStorage.tasks) 
{
    tasks = getDataFromLocalStorage("tasks");
    tasksToHTML();
}

function taskValidationAndAdding()
{
    if (contentDV.value && dateDV.value && timeDV.value)
    {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your task has been successfully saved! 😁👌🏻',
            showConfirmButton: false,
            timer: 1500
        })
        addTask();
        tasksForm.reset();
    }
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops, your task can not be added...🤦🏻‍♂️',
            text: 'You need to fill all the fields!',
        })
        return false;
    }
}

function addTask() 
{
    var task =
    {
        tContent: contentDV.value,
        tDate: dateDV.value,
        tTime: timeDV.value,
    };
    tasks.push(task);
    saveDataToLocalStorage("tasks", tasks);
    tasksToHTML();
}

function tasksToHTML() 
{
    tasksContainer.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) 
    {
        printSingleTaskToHTML(tasks[i], i);
    }
}

function printSingleTaskToHTML(task, index) 
{ 
    //in order to display the date as dd/mm/yyyy format on the html note div
    var inputDate = new Date(task.tDate);
    var day = inputDate.getDate();
    var month = inputDate.getMonth() + 1;
    var year = inputDate.getFullYear();
    
    singleTaskDV = '';
    singleTaskDV += '<div class = "ms-3 note">';
    singleTaskDV += `<i class="bi-x-circle mt-3 me-3" type="button" onclick = "deleteTask(${index})" style = "color:black; font-size:20px; float: right;"></i>`;
    singleTaskDV += `<div class = "content">${task.tContent}</div>`;
    singleTaskDV += `<div class = "date">${day}/${month}/${year}</div>`;
    singleTaskDV += `<div class = "time">${task.tTime}</div>`;
    singleTaskDV += '</div>';

    tasksContainer.innerHTML += singleTaskDV;
}


function deleteTask(indexToDelete) 
{
    tasks.splice(indexToDelete, 1);
    saveDataToLocalStorage("tasks", tasks);
    tasksToHTML();
}



// a function that gets data from local storage
function getDataFromLocalStorage(key) 
{
    return JSON.parse(localStorage.getItem(key));
}

// a function that stores data to local storage
function saveDataToLocalStorage(key, value) 
{
    localStorage.setItem(key, JSON.stringify(value));
}
