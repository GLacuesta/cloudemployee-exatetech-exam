'use strict';

(function() {

//task 1
function searchAndReplace(word, newWord){
	var page = [document.body], pageObj;

	while (pageObj = page.pop()) {
		if (!pageObj.textContent.match(word)) continue;
		for (let i = 0; i < pageObj.childNodes.length; ++i) {
			switch (pageObj.childNodes[i].nodeType) {
				case Node.ELEMENT_NODE :
					page.push(pageObj.childNodes[i]);
					break;
				case Node.TEXT_NODE :
					if (pageObj.childNodes[i].textContent.match(word)) {
						pageObj.childNodes[i].textContent = pageObj.childNodes[i].textContent.replace(word, newWord);
					}
					break;
			}
		}
	}
}


//task 2

//on document ready
function bindToTextbox(){
    var allInputs = document.getElementsByTagName('input');
    for (i = 0; i < allInputs.length; i++) {
        if (allInputs[i].type == 'text') {
            // add other css implementation for green and red icons
            allInputs[i].addEventListener('click', 'selectTextbox(this)');
        }
    }
}


var container = {}; // array for all textbox that will be clicked

function selectTextbox(elem){
    if(elem.tagName != "INPUT" && elem.type != "text") return;

    //additional css implementation if green icon switch to red and vice versa

    return (container.includes(elem.name)) ? 
                        container = container.filter(item => item !== elem.name) :
                        container.push(elem.name);
}

})();
