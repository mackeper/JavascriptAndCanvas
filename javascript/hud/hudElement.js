function hudElement(x, y, x2,y2) {
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.render = function(ctx) {
        //Override this to render.
        ctx.strokeStyle = "#000000";
        ctx.rect(this.x, this.y, this.x2, this.y2);
        ctx.stroke();
    }
    
    /**
       Check for intersection
     */
    this.intersect = function(mx,my) {
        if(this.x <= mx && mx <= this.x2 &&
          this.y <= my && my <= this.y2) {
            this.click();
        }
    }
    
    /**
       Handle when hudElement gets clicked.
     */
    this.click = function() {
        // Override for action.
    }

}
