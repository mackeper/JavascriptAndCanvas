var debugMode = false;
var debugDiv = document.createElement('div');

function setDebugMode(bool) {
    debugMode = bool;
    document.body.appendChild(debugDiv);
}

function setDebugText(str) {
    if(!debugMode) {
       return;
    }
    
    debugDiv.innerHTML = str + 
        "<br/>--------------<br/>" + 
        debugDiv.innerHTML;
}
