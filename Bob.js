class Bob{
    constructor(x,y){
        var options ={
            isStatic: false,
            restitution: 1.25,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(0,150,255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,30,30);
    }
}
