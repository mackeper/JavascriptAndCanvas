function HudLabel(x, y, str, size) {
    var str = str;
    var size = size;

    // Style
    var font = size+"px Arial";
    var color = "#000000";
    
    var hudelement = new HudElement(x,y,0,0)
    
    hudelement.render = function(ctx) {
        ctx.font = font;
        ctx.fillStyle = color;
        
        //Update the size of the hud element.
        hudelement.sizex = ctx.measureText(str).width; 
        hudelement.sizey = ctx.measureText(str).height; 
        
        ctx.fillText(str, this.x, this.y+size);
    }
    return hudelement;
}
