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
    
    canvas.on('click', function(e) {
        e .preventDefault();

        var mouse = {
            x: e.pageX - canvasPosition.x,
            y: e.pageY - canvasPosition.y
        };
        
        canvasObject.pushEntity(
            new Explosion(mouse.x, mouse.y, Math.random()*500+50 ));
   });
}
