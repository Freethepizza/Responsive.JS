window.addEventListener("load", main);
window.addEventListener("load", toggleExecution);
window.addEventListener("load", toggleHandler);
window.addEventListener("resize", main);



var currentWidth = window.innerWidth;
var currentHeight = window.innerHeight;



const usable = ["disappear","resize"];

var devices = {"iphone5":{"W":320,"H":568},"iphone6":{"W":375,"H":667},"iphone6plus":{"W":414,"H":736},"iphone7":{"W":320,"H":568},"iphone7plus":{"W":414,"H":736},"iphone8":{"W":375,"H":667},"iphone8plus":{"W":414,"H":736}};
window["devices"];

var iphone5 = 320;
var iphone678 = 375;
var iphone678plus = 414;


function $(e) {
    e = document.querySelectorAll(e);
    return e;
}

var iphone5width = 320;
var iphone6pluswidth = 414;

function getCurrentSize() {
    currentWidth = window.outerWidth;
    currentHeight = window.innerHeight;
}

function main() {
    console.log(devices);
    /*disappear*/
    var disappearElements = $('[disappear]')
    if (disappearElements.length > 0) {
        console.log("There's hidable elements: disappearElements.length > 0");
        disappear(disappearElements);
    }
    /*resize*/
    var resizeElements = $('[reduce]');
    if (resizeElements.length > 0) {
        console.log("There's reduceable elements: resizeElements.length > 0");
        reduce(resizeElements);
    }
}

function disappear(items) {
    for(var i=0;i<items.length;i++){
        console.log(items[i]);
        //console.log(items[i].getAttribute('disappear'));
        var device = items[i].getAttribute('disappear');
        disappearHandler(items[i],device);
    }
}

function disappearHandler(item, device){
    getCurrentSize();
    console.log(currentWidth);
    console.log();

    if(currentWidth <= window[device]){
        console.log(device);
        item.style.display = "none";
    }else{
        item.style.display = "block";
    }
}

function reduce(items) {
    for(var i=0;i<items.length;i++){
        var attribute = items[i].getAttribute('reduce').split(" ");
        reduceHandler(items[i],attribute);
    }
}

function reduceHandler(item,attribute){
    getCurrentSize();
    console.log(window[attribute[0]]);
    if(currentWidth <= window[attribute[0]]){
        item.style.width = attribute[1];
    }else{
        item.style.width = "";
    }
}

function toggleExecution(){
  var toggleElements = $('[toggle]');
  if (toggleElements.length > 0) {
    console.log("There's toggleable elements: ToggleElements.length > 0")
    toggle(toggleElements);
  }
}


/*function toggle(items){
    var button
    for (var i=0;i<items.length;i++){
      button = document.createElement('button');
      button.innerHTML = 'BUTTON BUTTON BUTTON';
      button.className += 'responsivejsbutton';
      items[i].insertAdjacentElement('beforebegin',button);
      items[i].style.transition  = "0.5s";
      items[i].style.display  = "none";
    }
    toggleHandler(items);
}

function toggleHandler(hiddenitem){
  var timesclicked = 0;
  var button = document.getElementsByClassName("responsivejsbutton");
    for(var i = 0;i<hiddenitem.length;i++){
      if(button[i].nextSibling == hiddenitem[i]){
        console.log()
        button[i].addEventListener("click",function(){finishHandling(i)});
      }
    }
    function finishHandling(index){
      timesclicked++;
      console.log("CLICKS: "+timesclicked + "index: "+index);
      if (timesclicked % 2==0 && timesclicked>0){
        console.log(button[i]);
        hiddenitem[].classList.add("hidden");
      }else{
        hiddenitem[0].classList.remove("hidden");
      }
      

    }
}
*/

function toggle(items){
  items.forEach(function(items){
      button = document.createElement('button');
      button.innerHTML = 'BUTTON BUTTON BUTTON';
      button.className += 'responsivejsbutton';
      items.insertAdjacentElement('beforebegin',button);
      items.style.transition  = "0.5s";
      items.classList.add("hidden");
      var nextItem = button.nextSibling;
      button.addEventListener("click",function(){toggleHandler(nextItem)});
  });
    /*for (var i=0;i<items.length;i++){
      button = document.createElement('button');
      button.innerHTML = 'BUTTON BUTTON BUTTON';
      button.className += 'responsivejsbutton';
      items[i].insertAdjacentElement('beforebegin',button);
      items[i].style.transition  = "0.5s";
      items[i].style.display  = "none";
    }*/
   
}

function toggleHandler(hiddenitem){
  console.log(hiddenitem);
  if(hiddenitem.classList.contains("hidden")){
    hiddenitem.classList.remove("hidden");
  }else{
    hiddenitem.classList.add("hidden");
  }
}


//*ADD MODALS!!!*//
