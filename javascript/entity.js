/**
   Entity class
*/

function Entity(x,y) {
    this.x = x;
    this.y = y;
    this.speedx = 0;
    this.speedy = 0;
    this.angle = 0;
    this.color = "#000000";
    this.update = function() {
        this.x += Math.cos(this.angle) * this.speedx;
        this.y += Math.sin(this.angle) * this.speedy;
    }
    this.render = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,5,0,2*Math.PI);
        ctx.fill();
    }
}
