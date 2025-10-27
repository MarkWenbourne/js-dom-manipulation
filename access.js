//document or document.body is our "entry point" to the DOM.
console.log("doctument:", document)
console.log("doctument.body:", document.body)

var bodyChildren = document.body.children
console.log("body.Children:", bodyChildren)

var firstChild = bodyChildren[0]
console.log("firstChild:", firstChild)
console.log("firstChild.parentNode:", firstChild.parentNode)
console.log("firstChild.nextSibling:", firstChild.nextSibling)

//This selects all "img" in the HTML document.
var images = document.getElementsByTagName("img")
console.log("images:", images)

//This selects all classes with "photo-card".
var photoCards = document.getElementsByClassName("photo-card")
console.log("photoCards:", photoCards)

//This selects a specific ID from document.
var container = document.getElementById("photo-card-container")
console.log("container:", container)

//This selects a specific item with multiple classes attached to it.
var rightNavItems = document.querySelector(".navitem.right")
console.log("rightNavItems:", rightNavItems)

//This selects all elements with class "navitem".
var allNavItems = document.querySelectorAll("navitem")
console.log("allNavItems:", allNavItems)

//This selects the text within the content.
console.log("photoCards[0].textContent:", photoCards[0].textContent)

console.log("photoCards[0].innerHTML:", photoCards[0].innerHTML)
console.log("photoCards[0].outerHTML:", photoCards[0].outerHTML)

console.log("images[0].src:", images[0].src)
images[0].src = "https://picsum.photos/400"