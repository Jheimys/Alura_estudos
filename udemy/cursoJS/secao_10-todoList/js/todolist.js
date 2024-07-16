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
        li.className = 'todo-item'

        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = obj.name

        li.appendChild(p)

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