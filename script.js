const input = document.getElementById('movieInput')
const addBtn = document.getElementById('addBtn')
const clearBtn = document.getElementById('clearBtn')
const list = document.getElementById('movieList')
const countDisplay = document.getElementById('countDisplay')
let movies = []

addBtn.addEventListener('click', AddbuttonClick)
function AddbuttonClick() {
    const name = input.value
    if (name) {
        movies.push(name)
        input.value = ''
        renderList(movies)
    }
}
clearBtn.addEventListener('click', ClearbuttonClick)
function ClearbuttonClick() {
    movies = []
    renderList(movies)
}
function renderList(moviesArray) {
    list.innerHTML = ''
    for (let i = 0; i < moviesArray.length; i++) {
        const li = document.createElement('li')
        li.textContent = moviesArray[i]
        li.addEventListener('click', () => {
            movies.splice(i, 1)
            renderList(movies)
        })
        list.appendChild(li)
    }
    countDisplay.textContent = "Total movies:" + moviesArray.length
}
