class Paper {
  constructor(x, y) {
    var options = {
        isStatic : false,
        'restitution':0.8,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.width = 20;
    this.height = 20;      
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    
    fill("cyan");
    ellipseMode(RADIUS);
    ellipse(pos.x ,pos.y , this.width, this.height);
    
  }
};