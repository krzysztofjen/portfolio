

  // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
    
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.className = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
    var input_text = document.getElementById("myInput");
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
li.setAttribute("class", "iten");

  if (inputValue === '') {
  input_text.setAttribute('placeholder','Nic nie wpisałeś łosiu');
  } else {
      input_text.setAttribute('placeholder','Masz jeszcze więcej zadań na dzisiaj?');
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.className = "none";
        
    }
  }
    $("li").draggable({ containment: "document", revert: true, start: function(){contenst = $(this);} }) ;
}

// start drag and drop

$(document).ready(function(){
 
    
$(".list").droppable({
    hoverClass: "drop",
    drop: function(){
        $(".list").append(contenst);
    }
}); 
    $(".list2").droppable({
    hoverClass: "drop",
    drop: function(){
        $(".list2").append(contenst);
    }
}); 
    
});


    

