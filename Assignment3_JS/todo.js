

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("nextToDo").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("my_list").appendChild(li);
    }
    document.getElementById("nextToDo").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }
}

var myToDoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// var inputCount = document.getElementsByTagName("LI");
// var count = document.getElementById("countToDo");
// let heading = document.createElement("h1");
// count.appendChild(heading);
