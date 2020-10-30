// console.log("Prank em loaded");
var storage, options;
var randomSelectors = "li,img,a,p,h1,h2,h3,h4,h5,h6";

// general stuff

// set an attribute on a given selector a given amount of the time
function applyIt(selector,data,frequency){
    // console.log('applyIt',selector,data,frequency);
    [].forEach.call(document.querySelectorAll(selector),function(elem){
        if(getRand() < frequency){
            elem.setAttribute("data-"+data,"");
        }
    });
}

// generare a random number
function getRand(num){
    num = num || 100;
    return Math.floor(Math.random(100)*num);
}

// remove all existing pranks (if any)
function clearAll(){
    // remove page pranks
    clearItem(options.pages);
    
    // remove element pranks
    clearItem(options.elements);
}

function clearItem(optionList){
    optionList.forEach(function(item){
        [].forEach.call(document.querySelectorAll('[data-'+item.id+']'),function(elem){
            elem.removeAttribute("data-"+item.id,"");
        });
    });
}

function init(delay){
    // console.log("init");
    clearAll();
    
    // individual elements
    // loop through each of the element level things
    options.elements.forEach(function(item){
        // console.log(item);
        // if they checked the box for this item
        if(storage[item.id] === "true"){
            // console.log("set "+item.name);
            applyIt(randomSelectors,item.id,storage[item.id+"-frequency"]);
        }
    });
    
    //full page stuff
    // loop through each of the page level things
    setTimeout(function(){
        options.pages.forEach(function(item){
            // console.log(item);
            // if they checked the box for this item
            if(storage[item.id] === "true"){
                // console.log("set "+item.name);
                applyIt('body',item.id,storage[item.id+"-frequency"]);
            }
        });
    },getRand(delay));
}

// get saved data from the popup config
function getStorage(delay){
    chrome.extension.sendMessage({
        greeting: 'storage'
    }, function(response) {
        // console.log(response);
        storage = response.storage;
        // console.log("storage:",storage);
        
        chrome.runtime.sendMessage({
            greeting: 'options'
        }, function(response) {
            // console.log(response);
            options = response.options;
            // console.log("options:",options);
            init(delay);
        });
    });
}
getStorage(10000);
// console.log(localStorage);


// listen for events from the extension script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "update"){
        // console.log("update pranks");
        getStorage(0);
        sendResponse({status: "updated"});
    }
  });