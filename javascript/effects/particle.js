/**
   Particle class
*/

function Particle(x, y, goalx, goaly){
    var entity = new Entity(x,y);
    var hyp = Math.sqrt(Math.pow(goalx-x,2) + Math.pow(goaly-y,2));
    var alpha = 1;
    var fading = true;
    entity.speedx = 3;
    entity.speedy = 3;
    
    // Find angle to goal
    if(goalx >= x) {
        entity.angle = Math.asin((goaly-y)/hyp);
    } else {
        entity.angle = -Math.asin((goaly-y)/hyp) + Math.PI;
        
    }
 
    this.setFade = function(bool) {
        fading = bool;
    }
    
    entity.update = function() {
        entity.x += Math.cos(entity.angle)*entity.speedx;
        entity.y += Math.sin(entity.angle)*entity.speedy;

        // Fade when closer to goal
        if(fading) {
            var hyp2 = Math.sqrt(Math.pow(goalx-entity.x,2) + Math.pow(goaly-entity.y,2));
            alpha = hyp2/hyp;
        }
        // Check if dead
        var lengthFromStart = Math.sqrt(Math.pow(x-entity.x,2) + Math.pow(y-entity.y,2));
        if(lengthFromStart > hyp || alpha < 0.08) {
            entity.dead = true;
        }
    }

    entity.render = function(ctx) {
        ctx.save();
        ctx.globalAlpha = alpha;
        
        ctx.fillStyle = entity.color;
        ctx.beginPath();
        ctx.arc(entity.x,entity.y,5,0,2*Math.PI);
        ctx.fill();
        
        ctx.restore();
    }
    return entity;
}
