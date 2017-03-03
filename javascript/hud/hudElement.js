function HudElement(x, y, sizex,sizey) {
    this.x = x;
    this.y = y;
    this.sizex = sizex;
    this.sizey = sizey;
    this.render = function(ctx) {
        //Override this to render.
        ctx.strokeStyle = "#000000";
        ctx.rect(this.x, this.y, this.sizex, this.sizey);
        ctx.stroke();
    }
    
    /**
       Check for intersection
     */
    this.intersect = function(mx,my) {
        if(this.x <= mx && mx <= this.x + this.sizex &&
          this.y <= my && my <= this.y + this.sizey) {
            return true;
        }
        return false;
    }
    
    /**
       Handle when hudElement gets clicked.
     */
    this.onClick = function() {
        // Override for action.
    }

    /**
       Handles on release events
     */
    this.onMouseDown = function() {
        //Override for action.
    }

}
