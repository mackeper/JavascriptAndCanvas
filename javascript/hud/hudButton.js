function HudButton(x,y,sizex,sizey,onclick) {
    var hudelement = new HudElement(x,y,sizex,sizey);
    
    var color = "#000000";
    var color2 = "#888888";
    var minSize = Math.min(sizex,sizey);
    var depht = minSize/10;
    var roundEdgeSize = depht;
    hudelement.render = function(ctx) {
        var xside = this.x + this.sizex;
        var yside = this.y + this.sizey;

        // Create gradient
        var grd=ctx.createRadialGradient(xside-this.sizex/2,yside-this.sizey/2,minSize/4,
                                         xside - this.sizex/2, yside - this.sizey/2 , minSize);
        grd.addColorStop(0,color);
        grd.addColorStop(1, color2);
        
        //Draw rounded edge square
        ctx.strokeStyle = color;
        ctx.lineWidth = depht/5;
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.moveTo(this.x + roundEdgeSize, this.y);
        ctx.lineTo(xside - roundEdgeSize, this.y);
        ctx.quadraticCurveTo(xside, this.y, xside, this.y + roundEdgeSize);
        ctx.lineTo(xside, yside - roundEdgeSize);
        ctx.quadraticCurveTo(xside, yside, xside - roundEdgeSize, yside);
        ctx.lineTo(this.x + roundEdgeSize, yside);
        ctx.quadraticCurveTo(this.x, yside, this.x, yside - roundEdgeSize);
        ctx.lineTo(this.x, this.y + roundEdgeSize);
        ctx.quadraticCurveTo(this.x, this.y, this.x + roundEdgeSize, this.y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    hudelement.onClick = function() {
        onclick();
        
        var tempColor = color;
        color = color2;
        color2 = tempColor;
    };
    
    hudelement.onMouseDown = function() {
        var tempColor = color;
        color = color2;
        color2 = tempColor;
    };

    return hudelement;
}
