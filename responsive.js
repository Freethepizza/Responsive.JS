window.addEventListener("load", main);
var currentWidth = window.innerWidth;
var currentHeight = window.innerHeight;
window.addEventListener("resize", main);

window.addEventListener("devicemotion", handleOrientation, true);

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
        console.log("there's reduceable elements: resizeElements.length > 0");
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

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
    
    document.getElementById("absolute").innerHTML="<h3>absolute: "+absolute+"</h3>";
    document.getElementById("alpha").innerHTML="<h3>alpha: "+alpha+"</h3>";
    document.getElementById("beta").innerHTML="<h3>beta: "+beta+"</h3>";
    document.getElementById("gamma").innerHTML="<h3>gamma: "+gamma+"</h3>";


}

