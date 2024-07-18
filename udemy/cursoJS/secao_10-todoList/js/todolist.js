; (function (){
    "use strict"

    //----- ARMAZENAR O DOM EM VARIAVÉIS
    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById('todo-add')
    const ul = document.getElementById('todo-list')

    //----- Entender melhor a diferença entre esses dois casos ---
    const lis = ul.getElementsByTagName('li')
    //const lis = document.querySelectorAll('li')
    // ----------------------------------------------------------------
    
    let arrTasks = [
        {
            name:'task 1',
            createdAt: Date.now(),
            completed: false
        },
        {
            name:'task 2',
            createdAt: Date.now(),
            completed: false
        }
    ]

    // function addEventLi(li){
    //     li.addEventListener('click', function(e){
    //         console.log(this)
    //     })
    // }

    function generateLiTask(obj){
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkButton = document.createElement('button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')
        const containerEdit = document.createElement('div')
        const inputEdit = document.createElement('input')
        const containerButtonEdit = document.createElement('button')
        const cointainerButtonCancel = document.createElement('button')

        li.className = 'todo-item'
        
        checkButton.className = 'button-check'
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ?  "" : "displayNone"}" data-action="checkButton"></i>
        `
        checkButton.setAttribute('data-action', 'checkButton')
        li.appendChild(checkButton)

        p.className = 'task-name'
        li.appendChild(p)

        editButton.className ='fas fa-edit'
        editButton.setAttribute('data-action', 'editButton')
        li.appendChild(editButton)

        containerEdit.className ='editContainer'
        inputEdit.className = 'editInput'
        inputEdit.setAttribute('type', 'text')
        inputEdit.value = obj.name
        containerEdit.appendChild(inputEdit)

        containerButtonEdit.className = 'editButton'
        containerButtonEdit.textContent = 'Edit'
        containerButtonEdit.setAttribute('data-action', 'containerButtonEdit')
        containerEdit.appendChild(containerButtonEdit)

        cointainerButtonCancel.className = 'cancelButton'
        cointainerButtonCancel.textContent = 'Cancel'
        cointainerButtonCancel.setAttribute('data-action', 'containerButtonCancel')
        containerEdit.appendChild(cointainerButtonCancel)
        li.appendChild(containerEdit)

        deleteButton.className = 'fas fa-trash-alt'
        deleteButton.setAttribute('data-action', 'deleteButton')
        li.appendChild(deleteButton)

        p.textContent = obj.name

        // addEventLi(li)

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

    function clikedUl(e) {
        //console.log(e.target.getAttribute('data-action'))
        const dataAction = e.target.getAttribute('data-action')
       

        if(!dataAction) return

        let currentLi = e.target

        while(currentLi.nodeName !== 'LI'){
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...lis].indexOf(currentLi)
        console.log(currentLiIndex)

        const actions = {
            editButton: function(){
                const editContainer = currentLi.querySelector('.editContainer');

                [...ul.querySelectorAll('.editContainer')].forEach(container => {
                    container.removeAttribute("style")
                });
                
                editContainer.style.display = "flex";
                
            },

            deleteButton: function(){
                arrTasks.splice('currentLiIndex', 1)
                console.log(arrTasks)
                renderTasks()
            },

            containerButtonEdit: function(){
                const val = currentLi.querySelector('.editInput').value
                arrTasks[currentLiIndex].name = val
                renderTasks()
            },

            containerButtonCancel: function(){
                currentLi.querySelector('.editContainer').removeAttribute('style')
                currentLi.querySelector('.editInput').value = arrTasks[currentLiIndex].name
            },

            checkButton: function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed

                if( arrTasks[currentLiIndex].completed ){
                    currentLi.querySelector('.fa-check').classList.remove('displayNone')
                } else {
                    currentLi.querySelector('.fa-check').classList.add('displayNone')
                }

                renderTasks()
            }
        }

        if(actions[dataAction]){
            actions[dataAction]()
        }

    }

    todoAddForm.addEventListener('submit', (e) => {
        e.preventDefault()
        addTask(itemInput.value)
        renderTasks()
        itemInput.value = ''
        itemInput.focus()
    });

    ul.addEventListener('click', clikedUl)

    renderTasks()

})()