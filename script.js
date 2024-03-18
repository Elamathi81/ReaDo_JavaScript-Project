
//select popbox,overlay,button
var popover=document.querySelector(".pop-overlay")
var popbox=document.querySelector(".pop-box")
var addpop=document.getElementById("add-popup")
addpop.addEventListener("click",function(){
    popover.style.display="block"
    popbox.style.display="block"
})
var cancel=document.getElementById("cancel-pop")
cancel.addEventListener("click",function(){
 event.preventDefault()
 popover.style.display="none";
 popbox.style.display="none";
})
//select container,addbook bitton,title,author,discription
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktit=document.getElementById("book-title")
var bookauth=document.getElementById("book-author")
var bookdis=document.getElementById("book-discription")
addbook.addEventListener("click",function(event){
    event.preventDefault()
var dic=document.createElement("div")
dic.setAttribute("class","book-container")
dic.innerHTML =`<h2>${booktit.value}</h2>
<h5>${bookauth.value}</h5> 
<p>${bookdis.value}</p>
<button onclick="deletebook(event)">Delete</button>`
container.append(dic)

popover.style.display="none";
popbox.style.display="none";
})
function deletebook(event)
{
event.target.parentElement.remove()
}




