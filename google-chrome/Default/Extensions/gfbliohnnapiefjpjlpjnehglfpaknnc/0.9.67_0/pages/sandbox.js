"use strict";function runScript(t){var n={settings:settings,error:""};settings.map={},settings.unmapAllExcept={};try{var s=new Function("settings",t);s(n.settings)}catch(e){n.error=e.toString()}return n}function map(t,n){var s=!1;for(var e in settings.map)settings.map[e]===n&&(settings.map[e]=t,s=!0);s||(settings.map[n]=t)}function unmap(t){settings.map[t]=""}function unmapAllExcept(t,n){settings.unmapAllExcept[n]=t}var settings={};window.addEventListener("message",function(t){var n=t.data.action;switch(n){case"evalInSandbox":t.source.postMessage({id:t.data.id,action:"resultInSandbox",result:runScript(t.data.code)},t.origin)}});