var photoCards = document.getElementsByClassName("photo-card")
var firstPhotoCard = photoCards[0]

//This is bad, you should almost never use innerHTML, as it will execute as code, rather than a string.
var userSuppliedContent = "<img src=x onerror='alert(\"Uh Oh!!!\")'/>"
// firstPhotoCard.innerHTML = "<p>" + userSuppliedContent + "</p>"

//This is safer if the content supplied is added by a user, not innerHTML.
firstPhotoCard.textContent = "<p>" + userSuppliedContent + "</p>"

//This creates a new photo card
function insertNewPhotoCard(url, caption) {
    var photoCardSection = document.createElement("section")
    photoCardSection.classList.add("photo-card")

    var imgContainerDiv = document.createElement("div")
    imgContainerDiv.classList.add("img-container")
    photoCardSection.appendChild(imgContainerDiv)

    var img = document.createElement("img")
    img.classList.add("person-photo-img")
    img.src = url
    imgContainerDiv.appendChild(img)

    var captionDiv = document.createElement("div")
    captionDiv.classList.add("caption")
    captionDiv.textContent = caption
    photoCardSection.appendChild(captionDiv)

    var container = document.getElementById("photo-card-container")
    container.appendChild(photoCardSection)
}
//This calls the new photo card.
insertNewPhotoCard("https://picsum.photos/400", "blah blah blah")
insertNewPhotoCard("https://picsum.photos/400", "blah blah blah")
insertNewPhotoCard("https://picsum.photos/400", "blah blah blah")