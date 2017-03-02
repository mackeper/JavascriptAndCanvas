/**
Canvas class
*/
function Canvas(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.canvas.height = this.height;
    this.canvas.width = this.width;
}

/**
function that starts the loop
*/
function run() {
    var canvasObject = new Canvas(1280,720);
    document.body.appendChild(canvasObject.canvas);

    var entityList = [new Entity(100,100)];

    var time = 0;
    loop(canvasObject, entityList, time);
}
/**
Game/program loop
*/

function loop(canvasObject, entityList, time){
setTimeout(function () {
    //update(time);
    render(canvasObject, entityList);
    loop(canvasObject, entityList, time);
}, 16);
};

/**
Updates all entites
*/
function update(time){

}

/**
render all entites
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
