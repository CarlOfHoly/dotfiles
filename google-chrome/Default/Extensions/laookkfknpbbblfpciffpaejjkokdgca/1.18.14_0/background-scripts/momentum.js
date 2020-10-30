var m=window.m=window.m||{};m.globals=m.globals||{},m.utils=m.utils||{},m.settingsUtils=m.settingsUtils||{},m.globals.version="1.18.14",m.globals.platform="Chrome",m.globals.isProduction=!0,m.globals.gaCode="UA-44319322-10",m.globals.gaCodePlus="UA-44319322-13",m.globals.urlRoot="https://api.momentumdash.com/",m.globals.urlRootApi="https://api.momentumdash.com/",m.globals.urlRootLogin="https://login.momentumdash.com/",m.globals.urlRootAccount="https://account.momentumdash.com/",m.globals.urlRootStats="https://stats.momentumdash.com/",m.globals.urlRootIntegration="https://integration.momentumdash.com/",m.globals.liveApi=!0,m.utils.parseJwt=function(t){try{var e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(e).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""));return n+="jfkfjdkfsjd}}}}{{{@",JSON.parse(n)}catch(t){return null}},m.utils.oneTimeLogin=function(e){return new Promise(function(n,o){try{var t=(new Date).getTime();if(m.globals.oneTimeLoginStarted&&m.globals.oneTimeLoginStarted>t-1e4)return void o("Another login is currently being processed.");m.globals.oneTimeLoginStarted=t,function(t,e,n,o){var a=e,r=localStorage.getItem("pendingLoginState");if(r){var i=JSON.parse(r);if(!i.state)return o("state passed in but no state in pendingLoginState");a.pendingState=i}fetch(t,{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then(s).then(function(t){n(t)}).catch(function(t){o(t)})}(m.globals.urlRootApi+"user/authenticate",e,function(e){if(!e||!e.token)return m.globals.oneTimeLoginStarted=!1,void o();if(!(function(){var t=localStorage.getItem("user_uuid");if(t)return t;var e=localStorage.getItem("token");if(!e)return null;var n=m.utils.parseJwt(e);return n&&(t=n.user_uuid||n.user_guid)?t.toLowerCase():null}()!==e.user_uuid))return a(e),m.globals.oneTimeLoginStarted=!1,void n();m.backupDB.newBackup(localStorage.getItem("client_uuid")||(new Date).getTime()).then(function(){var t=localStorage.getItem("api");localStorage.clear(),localStorage.clear(),t&&localStorage.setItem("api",t),a(e),m.globals.oneTimeLoginStarted=!1,n()})},function(){m.globals.oneTimeLoginStarted=!1,o("error processing login info")})}catch(t){m.globals.oneTimeLoginStarted=!1,o()}});function a(t){localStorage.setItem("token",t.token),t.token_uuid&&localStorage.setItem("token_uuid",t.token_uuid),t.user_uuid&&localStorage.setItem("user_uuid",t.user_uuid),t.features&&localStorage.setItem("f3t6b23d",t.features),localStorage.setItem("processNewLogin",!0)}function s(t){return 200==t.status?t.json():null}},window.m.backupDB=function(){var o,r,a=null,t=!1;function n(){if(!t){t=!0;try{window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction,window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange,dbVersion=1;var n=indexedDB.open("backup-db",1);n.onsuccess=function(){a=n.result},n.onerror=function(){},n.onupgradeneeded=function(t){var e=n.result;!function(t,e){try{t.oncomplete=function(){a=e}}catch(t){}}(t.target.transaction,n.result),e.createObjectStore("backup",{keyPath:"id"}).createIndex("client",["clientUuid"])}}catch(t){}}}function s(){return new Promise(function(e){try{a?e(a):(n(),setTimeout(function(){s().then(function(t){e(t)})},10))}catch(t){}})}function u(t,e,n){var a={};return a.clientUuid=n,a.key=t,a.value=e,a.backupDate=r,a.id=n+"-"+t+"-"+o,new Promise(function(n,o){s().then(function(t){try{var e=t.transaction(["backup"],"readwrite");e.oncomplete=function(t){n(t)},e.onerror=function(t){o(t)},e.objectStore("backup").put(a)}catch(t){o(t)}})})}return{newBackup:function(i){return r=new Date,o=r.getTime(),r=r.toISOString(),new Promise(function(r,e){try{s().then(function(){var t,e,n=Object.keys(localStorage),o=n.length,a=0;for(0<=n.indexOf("token")&&o--,t=0;t<n.length;t++)"token"!==(e=n[t])&&u(e,localStorage.getItem(e),i).then(function(){++a===o&&r()})})}catch(t){e()}})}}}(),chrome&&chrome.runtime&&chrome.runtime.setUninstallURL&&chrome.runtime.setUninstallURL("https://momentumdash.com/uninstall"),chrome.runtime.onInstalled.addListener(function(t){t&&t.reason&&"install"==t.reason&&chrome.tabs.create({url:"dashboard.html"})}),chrome.browserAction.onClicked.addListener(function(){chrome.tabs.create({url:"dashboard.html"})}),chrome.runtime.onMessage.addListener(function(e,n,o){if(n.tab&&"oneTimeLogin"==e.type)return m.utils.oneTimeLogin(e).then(function(){if(e.openNewTab)chrome.tabs.create({url:"dashboard.html"});else if(e.updateSenderTab){var t=n.tab.id;chrome.tabs.update(t,{url:"dashboard.html"})}o({success:!0})}).catch(function(t){o({success:!1,errorMessage:t})}),!0;if("momentum:authState"===e.type){if(!e.data||!e.data.userId)return;var t="login-state-"+e.data.src;e.data.loginState?localStorage.setItem(t,e.data.userId):localStorage.removeItem(t)}});