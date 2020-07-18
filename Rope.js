class RopeClass {
    constructor(body1, body2, offsetX, offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;  
        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offsetX, y:this.offsetY},
            stiffness: 1.2
            //length: 15,
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointBx = this.rope.bodyB.position.x + this.offsetX;
        var pointBy = this.rope.bodyB.position.y + this.offsetY;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointBx, pointBy);
    }
}