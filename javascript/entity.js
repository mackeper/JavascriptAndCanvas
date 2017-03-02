/**
   Entity class
*/

function Entity(x,y) {
    this.x = x;
    this.y = y;
    this.update = function() {
        this.x = this.x + 1;
    }
    this.render = function(ctx) {
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.x.this.y,10,0,2*Math.PI);
        ctx.stroke();
    }
}
