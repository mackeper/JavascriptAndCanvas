/**
   Canvas class
*/
function Canvas(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.canvas.id = "mainCanvas";
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    var entityList = [
        new Explosion(200,200,1000)
    ];
    
    /**
       Returns the list of entities.
     */
    this.getEntityList = function() {
        return entityList;
    }
    
    /**
       Pushes a entity to the entityList.
    */
    this.pushEntity = function pushEntity(entity) {
        entityList.push(entity);
    }
    
}

/**
   function that starts the loop
*/
function run() {
    var canvasObject = new Canvas(1280,720);
    document.body.appendChild(canvasObject.canvas);

    var input = new Input(canvasObject);


    var time = 0;
    loop(canvasObject, canvasObject.getEntityList(), time);
}


/**
   Game/program loop
*/

function loop(canvasObject, entityList, time){
setTimeout(function () {
    update(time, entityList);
    render(canvasObject, entityList);
    loop(canvasObject, entityList, time);
}, 16);
};

/**
   Handles all updating
*/
function update(time, entityList){
   for(var i = 0; i < entityList.length; i++) {
       entityList[i].update();
       if(entityList[i].dead == true) {
           entityList.splice(i,1);
       }
   }
}

/**
   Handle all rendering
*/
function render(canvasObject, entityList){
    var ctx = canvasObject.canvas.getContext("2d");
    //Background
    ctx.fillStyle = 'rgb(230,230,255)';
    ctx.fillRect(0,0,canvasObject.width, canvasObject.height)

    //Entities
    for(var i = 0; i < entityList.length; i++) {
        entityList[i].render(ctx);
    }
}
