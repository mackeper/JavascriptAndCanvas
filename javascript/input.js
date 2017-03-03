/**
   Input class
   Handling all user input
 */
function Input(canvasObject, hudObject) {
    var canvas = $('#mainCanvas');
    var canvasPosition = {
        x: canvas.offset().left,
        y: canvas.offset().top
    };
    
    function getMouse(e) {
        e .preventDefault();

        var mouse = {
            x: e.pageX - canvasPosition.x,
            y: e.pageY - canvasPosition.y
        };
        return mouse;
    }

    var mouseActions = {
        CLICK : 0,
        DOWN : 1
    };
    
    function checkHud(mouse, action) {
        var found = false;
        var elementList = hudObject.getHudElementList();
        for(var i = 0; i < elementList.length; i++) {
            var e = elementList[i];
            if(e.intersect(mouse.x,mouse.y)) {
                found = true;
                switch(action) {
                    case mouseActions.CLICK:
                    e.onClick();
                    break;
                    case mouseActions.DOWN:
                    e.onMouseDown();
                    break;
                }
            }
        }
        return found;
    }
    
    canvas.on('click', function(e) {
        var mouse = getMouse(e);
        if(!checkHud(mouse, mouseActions.CLICK)) {
            canvasObject.pushEntity(canvasObject.getTool(mouse.x, mouse.y));
        }
   });
    
   canvas.on('mousedown', function(e) {
        var mouse = getMouse(e);
        checkHud(mouse, mouseActions.DOWN);
   });
}
