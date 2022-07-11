const addBtn = document.querySelector('#todo-form button')
const thingsTodoContainer = document.querySelector('#list-things-todo ul')
const doneContainer = document.querySelector('#list-done-todo ul')

addBtn.onclick = function() {
    const input = document.querySelector('#new-todo')
    if (input.value === "") {
        return
    }

    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'pending')

    const listItemP = document.createElement('p')
    listItemP.innerText = input.value

    const completedBtn = document.createElement('button')
    completedBtn.setAttribute('type', 'button')
    completedBtn.innerText = "Completed"

    listItem.append(listItemP)
    listItem.append(completedBtn)

    thingsTodoContainer.append(listItem)

    input.value = ""
}

const listThingsTodo = document.querySelector('#list-things-todo')
listThingsTodo.onclick = function(event) {

    if (event.target.tagName === 'BUTTON') {

        const itemToMove = event.target.parentElement
        itemToMove.setAttribute('class', 'done')
        event.target.innerText = "Remove"

        doneContainer.append(itemToMove)
        
    }

}

const listDone = document.querySelector('#list-done-todo')
listDone.onclick = function(event) {

    if (event.target.tagName === 'BUTTON') {

        const itemToRemove = event.target.parentElement
        itemToRemove.remove()

    }

}

const quoteDiv = document.querySelector('#quote')
const authorDiv = document.querySelector('#author')

// returns a promise
// non-blocking operations

// fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(jsonData => {
//         quoteDiv.innerHTML = jsonData.quotes[0].text
//     })
//     .catch(err => {
//         console.log(err)
//     })

axios.get('https://type.fit/api/quotes')
    .then(jsonData => {
        const num = Math.floor(Math.random() * 200)
       // console.log(jsonData.data[num].text)
        quoteDiv.innerHTML = jsonData.data[num].text
        authorDiv.innerHTML = jsonData.data[num].author
    })
    .catch(err => {
        console.log('some err has occurred')
        console.log(err)
    })
