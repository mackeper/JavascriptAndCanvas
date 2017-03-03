function Hud(canvasObject) {
    var entity = new Entity(0,0);
    var elementList = [];
    
    entity.getHudElementList = function() {
        return elementList;
    }

    //Add a label
    elementList.push(new HudLabel(10,10,"Super mega fun canvas", 30));
    
    //Add a button
    var b1 = new HudButton(100,100,200,200, function() {
        canvasObject.getTool = function(x,y) {
            return new Starfield(x-250,y-250,x+250,y+250,x,y);
        }
    });
    b1.setText("Starfield",30);
    elementList.push(b1);

    entity.render = function(ctx) {
        for(var i = 0; i < elementList.length; i++) {
            elementList[i].render(ctx);
        }
    }
    
    return entity;
}
