class Button {
    constructor(value, x, y, w, h) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.hovered = false;
        this.pressed = false;
    }
    show() {
        strokeWeight(6);
        stroke(0, 255, 0);
        if (this.hovered) {
            fill(0, 0, 200, 100);
        } else {
            fill(0, 0, 200, 50);
        }
        rect(this.x, this.y, this.w, this.h, 12);
        // if (this.hovered) {
        //     //fill(0);
        //     //stroke(0);
        //     console.log('132');
        // } else {
        //     fill(255);
            
        // }
        
        fill(255, 0, 0);
        stroke(255, 0, 0);
        strokeWeight(2);
        textSize(40);
        textFont("Forte", 40);
        textAlign(CENTER);
        text(this.value, this.x + this.w / 2, this.y + this.h * 0.75);
    }
    isMouseInZone(mx, my) {
        return (mx >= this.x && mx < this.x + this.w && my >= this.y && my < this.y + this.h);
    }
    hover(mx, my) {
       if (this.isMouseInZone(mx, my) || this.pressed) {
           this.hovered = true;
       } else {
           this.hovered = false;
       }
    }
    isPressed(mx, my) {
        if (this.isMouseInZone(mx, my)) {
            this.pressed = !this.pressed;
        } 
    }
}