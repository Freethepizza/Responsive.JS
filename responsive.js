window.addEventListener("load", main);
window.addEventListener("load", toggleExecution);
window.addEventListener("load", modals);
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

    /*disappear*/
    var disappearElements = $('[disappear]')
    if (disappearElements.length > 0) {
        disappear(disappearElements);
    }
    /*resize*/
    var resizeElements = $('[reduce]');
    if (resizeElements.length > 0) {
        reduce(resizeElements);
    }
}

function disappear(items) {
    for(var i=0;i<items.length;i++){
        
        //console.log(items[i].getAttribute('disappear'));
        var device = items[i].getAttribute('disappear');
        disappearHandler(items[i],device);
    }
}

function disappearHandler(item, device){
    getCurrentSize();

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
    if(currentWidth <= window[attribute[0]]){
        item.style.width = attribute[1];
    }else{
        item.style.width = "";
    }
}

function toggleExecution(){
  var toggleElements = $('[toggle]');
  if (toggleElements.length > 0) {
    toggle(toggleElements);
  }
}

function toggle(items){
  
  items.forEach(function(items){ 
      var toggleTitle = items.getAttribute("toggle");
      button = document.createElement('button');
      button.innerHTML = toggleTitle;
      button.className += 'responsivejsbutton button-left';
      items.insertAdjacentElement('beforebegin',button);
      items.style.transition  = "0.5s";
      items.classList.add("hidden");
      var nextItem = button.nextSibling;
      button.addEventListener("click",function(){toggleHandler(nextItem)});
  });   
}

function toggleHandler(hiddenitem){
  if(hiddenitem.classList.contains("hidden")){
    hiddenitem.classList.remove("hidden");
  }else{
    hiddenitem.classList.add("hidden");
  }
}

function modals(){
  var modalOpeners = $('[openmodal]');
  var modalIds = $('[modal]');


  if (modalOpeners.length == modalIds.length && modalOpeners.length>0 && modalIds.length>0){
    console.log("MODAL CHECK OKAY!");
    modalsHandler(modalOpeners,modalIds);
  }else{
    console.log("Warning: some error ocured with the modals system,check your code");
  }
}

function modalsHandler(open,ids){
  var openValue;
  var modalId;
  open.forEach(function(open,ids){
    open.addEventListener("click",function(){
      console.log(open);
      modalExecution(open);
    });
  });
  ids.forEach(function(ids){
    modalId=ids.getAttribute("modal");
  });
}

function modalExecution(open){
  var openValue = open.getAttribute("openmodal");
  var element = $('[modal='+openValue+']');
  element[0].classList.remove("hidden");
  element[0].classList.add("open");
}

//*ADD MODALS!!!*//
