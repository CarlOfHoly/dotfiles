// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var options,
    initialized = false;
chrome.runtime.sendMessage({
    greeting: 'options'
}, function(response) {
    console.log(response);
    options = response.options;
    console.log("options:",options);
    init();
});

// TODO: when changing a value in the settings, clear the item on all tabs and reset it
/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');
console.log(url);
    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}



function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    // renderStatus('Performing Google Image search for ' + url);
    // console.log("hi2");
  });
  // console.log("plugin loaded");
  // chrome.tabs.executeScript(null,{code:"console.log('i');document.body.style.backgroundColor='red'"});
  // chrome.tabs.insertCSS(null,{string:'body{color:red !important}'});
  // document.getElementById('status').textContent = 'plugin loaded';
  // window.close();
});
// console.log("hi");

function saveValues(){
    [].forEach.call(document.querySelectorAll("input[type='checkbox']"),function(elem){
        var id = elem.getAttribute("id");
        elem.addEventListener('change',function(){
            elem.dispatchEvent(new CustomEvent('setData'));
        });
        elem.addEventListener('setData',function(){
            // console.log("setData");
            localStorage[id] = elem.checked;
            // console.log("Setting "+id+" to "+elem.checked);
            refreshPranks();
        });
        if(localStorage[id]==="true"){
            elem.checked = true;
        }
    });
    
    [].forEach.call(document.querySelectorAll("input[type='range']"),function(elem){
        var id = elem.getAttribute("id");
        elem.addEventListener('change',function(){
            elem.dispatchEvent(new CustomEvent('setData'));
        });
        elem.addEventListener('setData',function(){
            // console.log("setData");
            localStorage[id] = elem.value;
            // console.log(elem.parentElement.querySelector('.percent'));
            elem.parentElement.querySelector('.percent').innerText = elem.value;
            // console.log("Setting "+id+" to "+elem.value);
            refreshPranks();
        });
        elem.value = localStorage[id];
        elem.dispatchEvent(new CustomEvent('setData'));
    });
}

function setOption(optionList,addTo){
    var element = document.querySelector(".element");
    // console.log(optionList);
    optionList.forEach(function(item){
        // alert(item);
        var code = '<p><label><input type="checkbox" id="'+item.id+'" /> '+item.name+'</label>';
        if(item.description){
            code += ' <a href="#d" class="description-trigger">?</a>';
        }
        code += ' Less <input id="'+item.id+'-frequency" type="range" min="1" max="100" step="1" /> More - <span class="percent"></span>% of the time';
        if(item.description){
            code += ' <span class="description">'+item.description+'</span>';
        }
        code += '</p>';
        addTo.insertAdjacentHTML('beforeend', code);
    });
}
function setupAlls(){
    document.querySelector('#elem-all-frequency').addEventListener('change',function(){
        var curVal = document.querySelector('#elem-all-frequency').value;
        console.log(curVal);
        [].forEach.call(document.querySelectorAll(".elements input[type='range']"),function(elem2){
            elem2.value = curVal;
            elem2.parentElement.querySelector('.percent').innerText = curVal;
            elem2.dispatchEvent(new CustomEvent('setData'));
        });
    });
    
    document.querySelector('#fp-all-frequency').addEventListener('change',function(){
        var curVal = document.querySelector('#fp-all-frequency').value;
        console.log(curVal);
        [].forEach.call(document.querySelectorAll(".full input[type='range']"),function(elem2){
            elem2.value = curVal;
            elem2.dispatchEvent(new CustomEvent('setData'));
        });
    });
    
    document.querySelector('#elem-all').addEventListener('click',function(event){
        // console.log(event);
        var elem = event.target;
        // console.log(elem,elem.parentElement.parentElement.parentElement.parentElement);
        [].forEach.call(elem.parentElement.parentElement.parentElement.parentElement.querySelectorAll('input[type="checkbox"]'),function(elem2){
            // console.log(elem2);
            elem2.checked = elem.checked;
            elem2.dispatchEvent(new CustomEvent('setData'));
        });
    });
    document.querySelector('#fp-all').addEventListener('click',function(event){
        // console.log(event);
        var elem = event.target;
        // console.log(elem,elem.parentElement.parentElement.parentElement.parentElement);
        [].forEach.call(elem.parentElement.parentElement.parentElement.parentElement.querySelectorAll('input[type="checkbox"]'),function(elem2){
            // console.log(elem2);
            elem2.checked = elem.checked;
            elem2.dispatchEvent(new CustomEvent('setData'));
        });
    });
}

document.querySelector('.showem').addEventListener('click',function(event){
    [].forEach.call(document.querySelectorAll('.showme'),function(elem){
        elem.classList.remove('showme');
    });
    console.log(event.target,event.target.parentNode);
    event.target.parentNode.removeChild(event.target);
});

// function setFullOption(){
//     var full = document.querySelector(".full");
//     options.pages.forEach(function(item){
//         // alert(item);
//         full.insertAdjacentHTML('beforeend', '<li><label><input type="checkbox" id="'+item.id+'" /> '+item.name+'</label> - More <input id="'+item.id+'-frequency" type="range" min="1" max="10" step="1" /> Less - '+item.description+'</li>');
//     });
// }

function init(){
    // setFullOption();
    console.log(options);
    setOption(options['elements-all'],document.querySelector(".elements-all"));
    setOption(options['pages-all'],document.querySelector(".full-all"));
    setOption(options.pages,document.querySelector(".full"));
    setOption(options.elements,document.querySelector(".elements"));
    
    setupAlls();
    
    saveValues();
    [].forEach.call(document.querySelectorAll(".description-trigger"),function(elem){
        elem.addEventListener('click',function(event){
            event.preventDefault();
            elem.parentElement.querySelector('.description').classList.toggle('description-show');
        });
    });
    initialized = true;
}

function refreshPranks(){
    if(initialized){
        console.log("sending pranks");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "update"}, function(response) {
                console.log(response.status);
            });
        });
    }
}
