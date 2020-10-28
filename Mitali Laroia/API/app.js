//variables
var baseURL = "https://pokeapi.co/api/v2";
var pokemon = "/pokemon/";

//HTML elements
var title = document.getElementById("title");
var hright = document.getElementById("height");
var weight = document.getElementById("weight");
var idd = document.getElementById("idd");
var img = document.getElementById("img");
var topp = document.getElementById("topp");
var bottom = document.getElementById("bottom");
var dis= document.getElementById("description");

(function () {
  //Event Listener to make the request on click
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);

  var httpRequest;
  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
  
    var id1 = Math.floor(Math.random() * 100 + 1);
    var fullURL = baseURL + pokemon + id1;
    topp.className = 'content';
    bottom.className = 'pannel  rotate';
    dis.innerHTML = "Getting Your Poke`mon ...";
    httpRequest.onreadystatechange = fillInfo;

    httpRequest.open(
      "GET", fullURL
    );
    httpRequest.send();
  }

  //runs after the request is being made
  function fillInfo() {
    var responseContent;
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {   //200 means ok !
        responseContent = httpRequest.responseText;
        console.log(responseContent);
        var parsed = JSON.parse(responseContent);//get or parse the information of the pokemon
        console.log(parsed);
        title.innerHTML = parsed.name;
        height.innerHTML = parsed.height;
        weight.innerHTML = parsed.weight;
        img.src = parsed.sprites.front_default;
        topp.className = 'content active';
        bottom.className = 'pannel active';
        dis.innerHTML = "Get Your Pokemon";  
      } else {
        alert("There was a problem with the request.");
      }
    }

  } 
})();

function click() {

  var id = document.getElementById("idd").value;
  alert(id);
}