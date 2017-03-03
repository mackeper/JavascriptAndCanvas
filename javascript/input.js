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
        var elementList = hudObject.getHudElementList();
        for(var i = 0; i < elementList.length; i++) {
            var e = elementList[i];
            if(e.intersect(mouse.x,mouse.y)) {
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
    }
    
    canvas.on('click', function(e) {
        var mouse = getMouse(e);
        checkHud(mouse, mouseActions.CLICK);
        canvasObject.pushEntity(
            new Explosion(mouse.x, mouse.y, Math.random()*500+50 ));
   });
    
   canvas.on('mousedown', function(e) {
        var mouse = getMouse(e);
        checkHud(mouse, mouseActions.DOWN);
        canvasObject.pushEntity(
            new Explosion(mouse.x, mouse.y, Math.random()*500+50 ));
   });
}
