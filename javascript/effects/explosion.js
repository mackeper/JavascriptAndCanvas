/**
   Explosion class
*/
function Explosion(x,y,size) {
    var entity = new Entity(x,y);
    var amount = Math.round(Math.sqrt(size))*2;
    var particleList = [];
    
    for(var i = 0; i < amount; i++) {
        var angle = Math.random()*Math.PI*2;
        var radius = size + (Math.random()*size/6)*
            (Math.round(Math.random())*2-1);
        var goalx = radius * Math.cos(angle) + x;
        var goaly = radius * Math.sin(angle) + y;
        var p = new Particle(x,y,goalx,goaly);
        var speed = Math.random()*3 + 3;
        p.speedy = speed;
        p.speedx = speed;
        particleList.push(p);
    }

    entity.update = function() {
        for(var i = 0; i < particleList.length; i++) {
            particleList[i].update();
            if(particleList[i].dead == true) {
                particleList.splice(i,1);
            }
        }
    }

    entity.render = function(ctx) {
        for(var i = 0; i < particleList.length; i++) {
            particleList[i].render(ctx);
        }
    }

    return entity;
}
