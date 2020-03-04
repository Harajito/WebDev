import axios from "axios"

console.log("Hello world")  
function add(a,b)
{
    return a+b
}
function substract(a,b)
{
    return a-b
}

document.querySelector("#submit")//après #un id
    .addEventListener("click",function writeToChat(event) {
        var message = document.querySelector(".message").value
        var discussionElt = document.querySelector(".discussion")//. c'est pour dire que c'est une classe
        var nickname= document.querySelector(".nickname").value
        axios.post('/api/message', {
            message: 'Fred',
            nickname: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        discussionElt.innerHTML += "<p>" + nickname + ": " + message
    })
