/**
   Starfield class
   
*/
function Starfield(x,y,x2,y2,goalx,goaly) {
    var entity = new Entity();
    var amount = 20;
    var speedrange = [3,10];
    var particleList = [];
    var time = -1;
    
    /**
       Amount of particles
    */
    entity.setAmount = function(value) {
        amount = value;
    }

    entity.update = function() {
        while(particleList.length < amount && time != 0) {
            var newX = (Math.random() * (x2-x)) + x;
            var newY = (Math.random() * (y2-y)) + y;
            var p = new Particle(newX, newY, goalx, goaly);
            var newSpeed = (Math.random()*(speedrange[1]-speedrange[0])) + speedrange[0];
            p.speedy = newSpeed;
            p.speedx = newSpeed;
            particleList.push(p);
        }
        for(var i = 0; i < particleList.length; i++) {
            particleList[i].update();
            if(particleList[i].dead == true) {
                particleList.splice(i,1);
            }
        }
        if(time == 0 && particleList.length == 0) {
            entity.dead == true;
        } else if(time > 0) {
            time--;
        }
    }

    entity.render = function(ctx) {
        for(var i = 0; i < particleList.length; i++) {
            particleList[i].render(ctx);
        }
    }

    entity.setTime = function(t) {
        time = t;
    }
    return entity;
}
