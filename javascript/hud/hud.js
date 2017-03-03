function Hud() {
    var entity = new Entity(0,0);
    var elementList = [];
    
    entity.getHudElementList = function() {
        return elementList;
    }

    //Add a label
    elementList.push(new HudLabel(10,10,"Super mega fun canvas", 30));
    
    //Add a button
    elementList.push(new HudButton(100,100,200,200, function() {
        // do nothing
    }));

    entity.render = function(ctx) {
        for(var i = 0; i < elementList.length; i++) {
            elementList[i].render(ctx);
        }
    }
    
    return entity;
}
