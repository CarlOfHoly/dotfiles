"use strict";var desc,content;mapkey(";h","#99Toggle this section",function(){"none"!==desc.style.display?(content.style.height="100vh",desc.style.display="none"):(desc.style.display="",content.style.height=window.innerHeight-desc.offsetHeight+"px")}),"function"==typeof Front.renderDataFromClipboard&&Clipboard.read(function(e){Front.renderDataFromClipboard(e.data)}),Front.renderHeaderDescription=function(){var e=Normal.mappings.getWords().map(function(e){var n=Normal.mappings.find(e).meta;return e=KeyboardUtils.decodeKeystroke(e),n.annotation&&n.annotation.length&&99===n.feature_group?"<div><span class=kbd-span><kbd>"+htmlEncode(e)+"</kbd></span><span class=annotation>"+n.annotation+"</span></div>":null}).filter(function(e){return null!==e});desc=document.querySelector("div.description"),desc&&desc.remove(),content=document.querySelector("div.content"),desc=createElementWithContent("div",e.join(""),{"class":"description"}),document.body.insertBefore(desc,content),content.style.height=window.innerHeight-desc.offsetHeight+"px"},Front.renderHeaderDescription();