const ramenImageDisplay = document.getElementById('ramen-menu')
const displayImage = document.querySelector('#ramen-detail img')
const ramenName = document.querySelector('#ramen-detail h2')
const ramenRestaurant = document.querySelector('#ramen-detail h3')
const rating = document.querySelector('#rating-display')
const comments = document.querySelector('#comment-display')

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramenList => {
    ramenList.forEach(ramen => {
        showRamenImage(ramen)
    })
    ramenDetails(ramenList[0])
})

function showRamenImage(ramen){
        const imageDisplay = document.createElement('img')
        imageDisplay.src = ramen.image
        ramenImageDisplay.appendChild(imageDisplay)
        imageDisplay.addEventListener('click', () => ramenDetails(ramen))
}

function ramenDetails(ramen){
    displayImage.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comments.textContent = ramen.comment
}

const inputForm = document.querySelector('#new-ramen')

inputForm.addEventListener('submit', e => {
    e.preventDefault()
    const newName = document.querySelectorAll('#new-ramen input')[0].value
    const newRestaurant = document.querySelectorAll('#new-ramen input')[1].value
    const newImage = document.querySelectorAll('#new-ramen input')[2].value
    const newRating = document.querySelectorAll('#new-ramen input')[3].value
    const newComment = document.querySelectorAll('#new-ramen textarea')[0].value
    

    let newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment
    }
    showRamenImage(newRamen)
})