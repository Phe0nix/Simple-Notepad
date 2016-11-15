var create = document.getElementsByTagName("button")[0],
    space = document.getElementById("space"),
    //span = document.getElementsByTagName("span")[0],
    count = 0;
create.addEventListener("click",function(){
count++;
//span.innerHTML = count;

var div = document.createElement("div");
div.setAttribute("class","div");

var span = document.createElement("span");
span.setAttribute("class","heading");
var text = document.createTextNode(" ► Notepad " + count +"  |  ");
span.appendChild(text);

var button = document.createElement("button");
button.addEventListener("mousedown",function(){
div.style.display = "none";
})
var close = document.createTextNode("x");
button.setAttribute("class","close");
button.appendChild(close);
span.appendChild(button);

  var c = document.createElement("textarea");
  c.setAttribute("class", "demo");
  c.setAttribute("cols", "20");
  c.setAttribute("rows", "10");
  
  div.appendChild(c);div.appendChild(span);
  space.appendChild(div);
});