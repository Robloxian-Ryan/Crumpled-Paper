class Paper{
    constructor(x,y,r, width, height) {
        var options = {
            'density':1.2,
            'friction': 0,
            'restitution':0.5
        };
        this.width = width;
        this.height = height;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, (this.r-20)/2, options);
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
	}
  
}