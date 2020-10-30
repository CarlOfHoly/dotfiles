// use this to store stuff that need to go both to the page AND the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == 'storage') {
        sendResponse({
            storage: localStorage
        });
    }
    if (request.greeting == 'options') {
        sendResponse({
            options: options
        });
    }
});

var options = {
    "elements-all": [{
        name:"All",
        description: "",
        id:"elem-all"
    }],
    "elements": [
        {
            name:"Blur",
            description: "",
            id:"bl"
        },
        {
            name:"Hide Cursor",
            description: "",
            id:"cs"
        },
        {
            name:"Rotate",
            description: "",
            id:"rt"
        },
        {
            name:"Fade",
            description: "",
            id:"fd"
        },
        {
            name:"Grayscale",
            description: "",
            id:"gs"
        },
    ],
    "pages-all": [{
        name:"All",
        description: "",
        id:"fp-all"
    }],
    "pages": [
        {
            name:"Slow Fade",
            description: "Whole page fades to nothing over 120 seconds",
            id:"fpf"
        },
        {
            name:"Slow rotate",
            description: "Page rotates back and forth .2 degrees over 60 seconds",
            id:"fpr"
        },
        {
            name:"Slow Blur",
            description: "Page blurs in and out over 60 seconds",
            id:"fpb"
        },
        {
            name:"Slow Grayscale",
            description: "Page changes to grayscale and back to color over 120 seconds",
            id:"fgs"
        },
        {
            name:"Flip page",
            description: "The whole page quickly flips after 60 seconds",
            id:"fx"
        },
        {
            name:"Flash",
            description: "Page flashes like a monitor going out",
            id:"fpfl"
        },
        
    ]
};