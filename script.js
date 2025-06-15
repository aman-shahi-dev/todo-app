const addBtn = document.getElementById('add-btn')

const todoInput = document.getElementById('todo-input')

const todoItemsContainer = document.getElementById('todo-items-container')

addBtn.addEventListener('click', ( ) => {

    if(todoInput.value==''){
        alert("Please enter a task")
    }

    else{
        const value = todoInput.value

        const li = document.createElement('li')

        li.innerText = value

        const delButton = document.createElement('button')

        delButton.innerText = 'X'

        li.appendChild(delButton)

        delButton.addEventListener('click', () => {
            li.remove()
        })

        todoItemsContainer.appendChild(li)

        todoInput.value = ''
    }
    
})

todoInput.addEventListener('keypress', (event) => {
    if(event.key=='Enter'){
        if(todoInput.value==''){
            alert('Please enter a task')
        }else{
            addBtn.click()
        }
    }
})
