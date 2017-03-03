function Hud() {
    var entity = new Entity(0,0);
    var elementList = [];
    
    //Add a label
    elementList.push(new HudLabel(10,10,"Super mega fun canvas", 30));
    
    entity.render = function(ctx) {
        for(var i = 0; i < elementList.length; i++) {
            elementList[i].render(ctx);
        }
    }
    
    return entity;
}
