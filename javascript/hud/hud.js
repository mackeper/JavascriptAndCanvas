function Hud(canvasObject) {
    var entity = new Entity(0,0);
    var elementList = [];
    
    entity.getHudElementList = function() {
        return elementList;
    }

    //Add a label
    elementList.push(new HudLabel(10,10,"Super mega fun canvas", 30));
    
    //Add a button
    var b1 = new HudButton(10,80,40,40, function() {
        canvasObject.getTool = function(x,y) {
            var sf = new Starfield(x-250,y-250,x+250,y+250,x,y);
            sf.setTime(5000);
            return sf;
        }
    });
    b1.setText("Starfield",10);
    elementList.push(b1);
    
    var b2 = new HudButton(10, 130, 40, 40, function() {
       canvasObject.getTool = function(x,y) {
           return new Explosion(x,y, Math.random()*500+50);
       } 
    });
    b2.setText("Explosion",10);
    elementList.push(b2);

    entity.render = function(ctx) {
        for(var i = 0; i < elementList.length; i++) {
            elementList[i].render(ctx);
        }
    }
    
    return entity;
}
