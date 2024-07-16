; (function (){
    "use strict"

    //ARMAZENAR O DOM EM VARIAVÉIS
    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById('todo-add')
    const ul = document.getElementById('todo-list')
    //const lis = ul.getElementsByTagName('li')

    let arrTasks = [
        {
            name:'task 1',
            createdAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener('click', function(e){
            console.log(this)
        })
    }

    function generateLiTask(obj){
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkButton = document.createElement('button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')

        li.className = 'todo-item'
        
        checkButton.className = 'button-check'
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
        li.appendChild(checkButton)

        p.className = 'task-name'
        li.appendChild(p)

        editButton.className ='fas fa-edit'
        li.appendChild(editButton)

        deleteButton.className = 'fas fa-trash-alt'
        li.appendChild(deleteButton)

        p.textContent = obj.name

        addEventLi(li)

        return li

    }

    function renderTasks(){
        ul.innerHTML = ''
        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });

    }

    function addTask(task){
       arrTasks.push({
            name:task,
            createdAt: Date.now(),
            completed: false
       })
    };

    todoAddForm.addEventListener('submit', (e) => {
        e.preventDefault()
        addTask(itemInput.value)
        renderTasks()
        itemInput.value = ''
        itemInput.focus()
    });

    renderTasks()

})()